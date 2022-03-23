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

  //holds the searchInput. - gets stored value from localStorage.
  const [searchInput, setSInput] = useState(() => {
    const saved = localStorage.getItem("search");
    return saved || "";
  });

  //holds the sort options
  const [sortOptions, setOptions] = useState([]);
  //sort value
  const [value, setValue] = useState("all");

  //get the sort options from json
  useEffect(() => {
    const getData = () => {
      fetch("options.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          setOptions(json);
        });
    };
    getData();
  }, []);

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

  //filtered arrays for the different types 
  const typeGame = gameData.filter((giveaway) => giveaway.type === "Full Game"),
  typeLoot = gameData.filter((giveaway) => giveaway.type === "DLC & Loot");


  //the render
  return (
    <div className="App" style={styles.App}>
      <Header setSInput={setSInput} />
      <main>
        <Routes>
          <Route path="/" element={<Main gameData={gameData} sortOptions={sortOptions} setValue={setValue} value={value}/>} />
          <Route path="details" element={<Details />}>
            <Route path=":id" element={<Details />} />
          </Route>
          <Route path="games" element={<Games typeGame={typeGame} />} />
          <Route path="loot" element={<Loot typeLoot={typeLoot} />} />
          <Route path="results" element={<Results gameData={gameData} searchInput={searchInput} setSInput={setSInput}/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

const styles = {
  App: {
    background: "#0D0F12",
    color: "#fff",
  },
};
