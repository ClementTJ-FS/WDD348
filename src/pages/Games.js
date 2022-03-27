import React from "react";
import MainCard from "../components/cards/MainCard";
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
`;

const Games = ({ gameData }) => {
  return (
    <StyledSection>
      <div>
        <h2 style={styles.h2}>Free Games</h2>
      </div>
      <ul style={styles.ul}>
        {/* map the data to cards, if gameData exists */}
        {gameData &&
          gameData
            .filter((giveaway) => giveaway.type === "Full Game")
            .map((game) => {
              return (
                <li key={game.id} style={styles.li}>
                  <MainCard
                    cardId={game.id}
                    cardImg={game.image}
                    cardHeader={game.title}
                    cardContent={game.description}
                    cardImgAlt="Giveaway Image"
                    pillTxt1={game.worth}
                    pillTxt2={game.type}
                    gaUrl={game.open_giveaway_url}
                  />
                </li>
              );
            })}
      </ul>
    </StyledSection>
  );
};
export default Games;

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
};
