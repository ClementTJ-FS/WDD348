import React from "react";
import MainCard from "../components/cards/MainCard";

function Main ({gameData}) {
    return(
        <div>
           <ul style={styles.ul}>
           {/* map the data to cards, if gameData !=null */}
            {gameData && gameData.map(game => {      
                    return (
                        <li key={game.id} style={styles.li}>
                            <MainCard 
                                cardImg={game.image} 
                                cardHeader={game.title} 
                                cardContent={game.description}
                                cardImgAlt="Giveaway Image"
                                pillTxt="Placeholder"
                                gaUrl={game.open_giveaway_url}
                            />
                        </li>
                    )
                })}
            </ul> 
        </div>
    )
}
export default Main;

const styles = {
    ul:{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      maxWidth: "125rem",
      margin: "0 auto",
      listStyle: "none"
    },
    li:{
      width: "35rem",
      height: "30rem",
      margin: "1rem"
    }
  }