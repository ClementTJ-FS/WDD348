import React from "react";
import MainCard from "../components/cards/MainCard";

const Games = ({ typeGame }) => {
  return (
    <div>
      <div>
        <h1 style={styles.h1}>Free Games</h1>
      </div>
      <ul style={styles.ul}>
        {/* map the data to cards, if typeGame exists */}
        {typeGame &&
          typeGame.map((game) => {
            return (
              <li key={game.id} style={styles.li}>
                <MainCard
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
    </div>
  );
};
export default Games;

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
  },
  li: {
    width: "35rem",
    height: "30rem",
    margin: "1rem",
  },
};
