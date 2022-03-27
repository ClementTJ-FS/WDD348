import React from "react";
import MainCard from "../components/cards/MainCard";
import Search from "../components/Search";
import styled from "styled-components";

const StyledSection = styled.section`
width: 100%;

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
  .searchContainer {
      width: 25rem;
      margin: 1rem auto;
  }
`

const Results = (props) => {
  return (
    <StyledSection>
      <div className="searchContainer">
        <Search setSInput={props.setSInput} />
      </div>

      <h2>Results for: "{props.searchInput}"</h2>
      <ul>
      {/* The results display - Filters gameData for searchinput - If no input, displays all */}
        {props.gameData &&
          props.gameData
            .filter((ga) => {
              if (props.searchInput === "") {
                return true;
              } else if (
                ga.title.toLowerCase().includes(props.searchInput.toLowerCase())
              ) {
                return true;
              }
              return false;
            })
            .map((ga) => {
              return (
                <li key={ga.id}>
                  <MainCard
                    cardId={ga.id}
                    cardImg={ga.image}
                    cardHeader={ga.title}
                    cardContent={ga.description}
                    cardImgAlt="Giveaway Image"
                    pillTxt1={ga.status}
                    pillTxt2={ga.type}
                    gaUrl={ga.open_giveaway_url}
                  />
                </li>
              );
            })}
      </ul>
    </StyledSection>
  );
};
export default Results;
