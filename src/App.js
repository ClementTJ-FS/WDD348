import { React,  useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Details from "./pages/Details";
import Games from "./pages/Games";
import Loot from "./pages/Loot";
import Results from "./pages/Results";
import Header from "./components/Header";
import Footer from "./components/Footer"



function App() {
  //useState to hold the data from API
  const [gameData, setGameData] = useState([]),
    //holds the searchInput. - gets stored value from localStorage.
    [searchInput, setSInput] = useState(() => {
      const saved = localStorage.getItem("search");
      return saved || "";
    }),
    //holds the sort options
    [sortOptions, setOptions] = useState([]),
    //sort values
    [platSelected, setPlatSelected] = useState("all"),
    [typeSelected, setTypeSelected] = useState("all"),
    [sortSelected, setSortSelected] = useState("date"),
    [loading, setLoading] = useState(true),
    [filteredGa, setFilteredGa] = useState([]);

    //filters the main page items - sets filteredGa state
    useEffect(()=>{
      const setFilters =()=>{
       setFilteredGa( gameData
        .filter((ga) => {
          if (platSelected === "all") {
            return true;
          } else if (ga.platforms.toLowerCase().includes(platSelected)) {
            return true;
          }
          return false;
        })
        .filter((ga) => {
          if (typeSelected === "all") {
            return true;
          } else if (ga.type.toLowerCase().includes(typeSelected)) {
            return true;
          }
          return false;
        })
        .sort((a, b) => {
          if (sortSelected === "date") {
            return a.published_date - b.published_date;
          } else if (sortSelected === "popularity") {
            return b.users - a.users;
          }
          return 0;
        })
       )}
       setFilters();
    },[gameData, platSelected, sortSelected, typeSelected])

    

  //get the sort options from options.json
  useEffect(() => {
    const getData = () => {
      const url = process.env.PUBLIC_URL + "/options.json"
      fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        }
      })
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          setOptions(json);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    getData();
  }, []);

  //API hook - gets all giveaways - sets gameData state to returned results
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://gamerpower.p.rapidapi.com/api/giveaways",
      params: {},
      headers: {
        "x-rapidapi-host": "gamerpower.p.rapidapi.com",
        "x-rapidapi-key": "cfe536908dmsh1a523e1c7bd239fp1f9aebjsne6745a54d533", //Not secure
      },
    };
    function getData() {
      axios
        .request(options)
        .then((response) => {
          console.log("requested");
          setGameData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    getData();
  }, []);

  //the render
  return (
    <div style={styles.container}>
      <Header setSInput={setSInput} />
      <main style={styles.App}>
        <Routes>
          <Route
            path="/"
            element={
              <Main
                gameData={filteredGa}
                sortOptions={sortOptions}
                platSelected={platSelected}
                setPlatSelected={setPlatSelected}
                typeSelected={typeSelected}
                setTypeSelected={setTypeSelected}
                sortSelected={sortSelected}
                setSortSelected={setSortSelected}
                loading={loading}
              />
            }
          />
          <Route path="details" element={<Details loading={loading} setLoading={setLoading}/>}>
            <Route path=":id" element={<Details  loading={loading} setLoading={setLoading}/>} />
          </Route>
          <Route path="games" element={<Games gameData={gameData} />} />
          <Route path="loot" element={<Loot gameData={gameData} />} />
          <Route
            path="results"
            element={
              <Results
                gameData={gameData}
                searchInput={searchInput}
                setSInput={setSInput}
              />
            }
          />
        </Routes>
      </main>
      <div style={styles.footer}>
        {gameData && <Footer />}
      </div>
       
    </div>
  );
}

export default App;

const styles = {
  container: {
    position: "relative",
    minHeight: "100vh",
    width: "100%"
  },
  App: {
    background: "#0D0F12",
    color: "#fff",
    marginTop: "5rem",
    height: "100%"
  },
  footer:{
    position: "relative",
    width: "100%",
    bottom:"0",
    marginTop: "5rem"
  }
};
