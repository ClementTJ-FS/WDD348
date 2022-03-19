import React from "react";
import MainCard from "../components/cards/MainCard";
import Search from "../components/Search";

const Results = (props) => {
  return (
    <section>
      <div style={styles.searchContainer}>
        <Search setSInput={props.setSInput} />
      </div>

      <h1 style={styles.h1}>Results for: "{props.searchInput}"</h1>
      <ul style={styles.ul}>
      {/* The results display - Filters gameData for searchinput - If no input, displays all */}
        {props.gameData &&
          props.gameData
            .filter((ga) => {
              if (props.searchInput === "") {
                return ga;
              } else if (
                ga.title.toLowerCase().includes(props.searchInput.toLowerCase())
              ) {
                return ga;
              }
            })
            .map((ga) => {
              return (
                <li key={ga.id} style={styles.li}>
                  <MainCard
                    setId={props.setId}
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
    </section>
  );
};
export default Results;

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
  searchContainer: {
      width: "25rem",
      margin: "1rem auto"
  }
};
