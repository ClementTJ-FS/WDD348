import { React, useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Details from "./pages/Details";
import Games from "./pages/Games";
import Loot from "./pages/Loot";
import Results from "./pages/Results";
import Header from "./components/Header";


function App() {
  //useState to hold the data from API
  const [gameData, setGameData] = useState([]);

  //holds id from details button click. - gets stored value from localStorage.
  const [id, setId] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("id");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  })

  
  //filtered arrays for the different types
  const typeGame = gameData.filter((giveaway) => giveaway.type === "Full Game");
  const typeLoot = gameData.filter((giveaway) => giveaway.type === "DLC & Loot");
  

  //API hook - gets all giveaways - sets gameData state to returned results
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://gamerpower.p.rapidapi.com/api/giveaways",
      headers: {
        "x-rapidapi-host": "gamerpower.p.rapidapi.com",
        "x-rapidapi-key": "cfe536908dmsh1a523e1c7bd239fp1f9aebjsne6745a54d533", //Not secure
      },
    };
    function getData() {
      axios
        .request(options)
        .then((response) => {
          setGameData(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    getData();
  }, []);

  //the render
    return (
      <div className="App" style={styles.App}>
        <Header />
        <main>
          <Routes>  
              <Route path="/" element={<Main gameData={gameData} setId={setId}/>} />
              <Route path="main" element={<Main gameData={gameData} setId={setId}/>} />
              <Route path="details" element={<Details id={id}/>} />
              <Route path="games" element={<Games typeGame={typeGame} setId={setId}/>} />
              <Route path="loot" element={<Loot typeLoot={typeLoot} setId={setId}/>} />
              <Route path="results" element={<Results />} />
          </Routes> 
        </main>
      </div>
    )
  }


export default App;

const styles = {
  App:{
    background: "#0D0F12",
    color: "#fff"
  }
}
