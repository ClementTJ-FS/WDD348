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

const Loot = ({ gameData }) => {
  return (
    <StyledSection>
      <div>
        <h2>DLC & Loot</h2>
      </div>
      <ul>
        {/* map the data to cards, if gameData exists */}
        {gameData &&
          gameData
            .filter((giveaway) => giveaway.type === "DLC")
            .map((game) => {
              return (
                <li key={game.id}>
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
export default Loot;

