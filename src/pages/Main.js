import { React } from "react";
import MainCard from "../components/cards/MainCard";
import FilterBar from "../components/FilterBar";
import BounceLoader from "react-spinners/BounceLoader";

const Main = (props) => {
  const filteredGa =
    props.gameData &&
    props.gameData
      .filter((ga) => {
        if (props.platSelected === "all") {
          return true;
        } else if (ga.platforms.toLowerCase().includes(props.platSelected)) {
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
      })
      .sort((a, b) => {
        if (props.sortSelected === "date") {
          return a.published_date - b.published_date;
        } else if (props.sortSelected === "popularity") {
          return b.users - a.users;
        }
        return 0;
      });

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
      ) : filteredGa.length < 1 ? (
          <h2 style={styles.error}>Sorry, no giveaways match those filters</h2>
      ) : (
        <ul style={styles.ul}>
          {/* map the data to cards, if gameData exists */}
          {filteredGa.map((game) => {
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
      )}
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
  loader: {
    margin: "5rem 50%",
  },
  error: {
    textAlign: "center",
    color: "red"
  }
};
