import { React, useEffect, useState } from "react";
import MainCard from "../components/cards/MainCard";
import FilterBar from "../components/FilterBar";
import BounceLoader from "react-spinners/BounceLoader";
import InfiniteScroll from "react-infinite-scroll-component";

const Main = (props) => {
  const perPage = 9,
    [lastPosition, setLastPosition] = useState(perPage),
    [allGa, setallGa] = useState([]),
    [hasMore, setHasmore] = useState(true),
    loadMore = () => {
      setallGa((prev) => [
        ...prev,
        ...props.gameData.slice(lastPosition, lastPosition + perPage),
      ]);

      setLastPosition(lastPosition + perPage);
      console.log(lastPosition);
    };

  useEffect(() => {
    const setGa = () => {
      setallGa(props.gameData.slice(0, perPage));
    };
    setGa();
  }, [props.gameData]);

  return (
    <section>
      <div>
        <h1 style={styles.h1}>All Giveaways</h1>
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
        <div style={styles.loader}>
          <BounceLoader color={"#2EA0D6"} loading={props.loading} size={60} />
        </div>
      ) : allGa.length < 1 ? (
        <h2 style={styles.error}>
          Sorry, there are no current giveaways that match those filters.
        </h2>
      ) : (
        <InfiniteScroll
          dataLength={allGa.length} //This is important field to render the next data
          next={loadMore}
          hasMore={hasMore}
        >
          {
            <ul style={styles.ul}>
              {allGa.map((game) => {
                return (
                  <li key={game.id} style={styles.li}>
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

      {/* {props.loading ? (
        <div style={styles.loader}>
          <BounceLoader color={"#2EA0D6"} loading={props.loading} size={60} />
        </div>
      ) : allGa.length < 1 ? (
        <h2 style={styles.error}>
          Sorry, there are no current giveaways that match those filters.
        </h2>
      ) : (
        <ul style={styles.ul}>
          map the data to cards, if gameData exists
          {allGa.map((game) => {
            return (
              <li key={game.id} style={styles.li}>
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
      )}*/}
    </section>
  );
};
export default Main;

const styles = {
  h1: {
    textAlign: "center",
  },
  ul: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    maxWidth: "125rem",
    margin: "0 auto",
    listStyle: "none",
    padding: "0"
  },
  li: {
    width: "35rem",
    height: "30rem",
    margin: "1rem",
  },
  loader: {
    margin: "5rem 50%",
  },
  error: {
    textAlign: "center",
    color: "red",
  },
};
