import React from "react";
import MainCard from "../components/cards/MainCard";
import Search from "../components/Search";
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
`;

const Results = (props) => {
  return (
    <StyledSection>
      <div style={styles.searchContainer}>
        <Search setSInput={props.setSInput} />
      </div>

      <h2 style={styles.h2}>Results for: "{props.searchInput}"</h2>
      <ul style={styles.ul}>
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
                <li key={ga.id} style={styles.li}>
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

const styles = {
  h2: {
    textAlign: "center",
  },
  ul: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    maxWidth: "125rem",
    margin: "0 auto",
    listStyle: "none",
  },
  li: {
    width: "35rem",
    height: "30rem",
    margin: "1rem",
  },
  searchContainer: {
      width: "25rem",
      margin: "1rem auto"
  }
};
