import { React, useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Details from "./pages/Details";
import Games from "./pages/Games";
import Loot from "./pages/Loot";
import Results from "./pages/Results";
import Header from "./components/Header";
import Loading from "./components/Loading";

function App() {
  //useState to hold the data from API
  const [gameData, setGameData] = useState([]);

  //state to hold selected items details
  const [gaDetails, setGaDetails] = useState([]);
  console.log(gaDetails);

  //filtered arrays for the different types
  const typeGame = gameData.filter((data) => data.type === "Full Game");
  const typeLoot = gameData.filter((data) => data.type === "DLC & Loot");
  
  //API hook
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

  return (
    <div className="App">
      <Header />
      <section>
          <Routes>
            <Route path="/" element={<Main gameData={gameData}/>} />
            <Route path="main" element={<Main gameData={gameData} setGaDetails={setGaDetails}/>} />
            <Route path="details" element={<Details />} />
            <Route path="games" element={<Games typeGame={typeGame}/>} />
            <Route path="loot" element={<Loot typeLoot={typeLoot}/>} />
            <Route path="results" element={<Results />} />
          </Routes>
        </section>
      <main>
        
      </main>
    </div>
  );
}

export default App;
