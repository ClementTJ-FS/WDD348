import { React, useEffect, useState } from "react";
import MainCard from "../components/cards/MainCard";
import FilterBar from "../components/FilterBar";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../components/Loader";
import styled from "styled-components";

const StyledSection = styled.section`
width: 100vw;

h2 {
    text-align: center;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    max-width: 125rem;
    margin: 0 auto;
    list-style: none;
    padding: 0;
    @media (max-width: 500px){
      width: 100%;
    }
  }
  li {
    width: 35rem;
    margin: 1rem;
    @media (max-width: 499px){
      width: 90%;
    }

  }
  .error {
    text-align: center;
    color: red;
  }
`

const Main = (props) => {
  //how many Giveaways to show per scroll
  const perPage = 9,
    [lastPosition, setLastPosition] = useState(perPage),
    [allGa, setallGa] = useState([]),
    
    //for infinite scroll - sets next giveaways to display - combine with previously displayed - moves position for next scroll
    loadMore = () => {
      setallGa((prev) => [
        ...prev,
        ...props.gameData.slice(lastPosition, lastPosition + perPage),
      ]);
      setLastPosition(lastPosition + perPage);
    };

    //slices the giveaways into "pages"
  useEffect(() => {
    const setGa = () => {
      setallGa(props.gameData.slice(0, perPage));
    };
    setGa();
  }, [props.gameData]);

  return (
    <StyledSection>
      <div>
        <h2>All Giveaways</h2>
      </div>
      {props.sortOptions && (
        <FilterBar
          sortOptions={props.sortOptions}
          setPlatSelected={props.setPlatSelected}
          setTypeSelected={props.setTypeSelected}
          setSortSelected={props.setSortSelected}
        />
      )}

      {props.loading ? (
        <Loader />
      ) : allGa.length < 1 ? (
        <h2 className="error">
          Sorry, there are no current giveaways that match those filters.
        </h2>
      ) : (
        <InfiniteScroll
          dataLength={allGa.length} //This is important field to render the next data
          next={loadMore}
          hasMore={true}
        >
          {
            <ul>
              {allGa.map((game) => {
                return (
                  <li key={game.id}>
                    <MainCard
                      cardId={game.id}
                      cardImg={game.image}
                      cardHeader={game.title}
                      cardContent={game.description}
                      cardImgAlt="Giveaway Image"
                      pillTxt1={game.status}
                      pillTxt2={game.type}
                      gaUrl={game.open_giveaway_url}
                    />
                  </li>
                );
              })}
            </ul>
          }
        </InfiniteScroll>
      )}
    </StyledSection>
  );
};
export default Main;


