import { React } from "react";
import MainCard from "../components/cards/MainCard";
import FilterBar from "../components/FilterBar";

const Main = (props) => {
  console.log(props.platSelected, props.typeSelected, props.sortSelected);
  console.log();
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
      <ul style={styles.ul}>
        {/* map the data to cards, if gameData exists */}
        {props.gameData &&
          props.gameData
            .filter((ga) => {
              if (props.platSelected === "all") {
                return true;
              } else if (
                ga.platforms.toLowerCase().includes(props.platSelected)
              ) {
                return true;
              }
              return false;
            })
            .filter((ga) => {
              if (props.typeSelected === "all") {
                return true;
              } else if (ga.type.toLowerCase().includes(props.typeSelected)) {
                return true;
              }
              return false;
            }).sort((a,b) =>{
              if(props.sortSelected === "date"){
                return a.published_date - b.published_date
              }else if(props.sortSelected === "popularity"){
                return b.users - a.users
              }
              return 0;
            })
            .map((game) => {
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
  },
  li: {
    width: "35rem",
    height: "30rem",
    margin: "1rem",
  },
};
