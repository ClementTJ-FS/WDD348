import {React, useState} from "react";
import axios from 'axios';

function App() {
  //useState to hold the data from API
  const [gameData, setGameData] = useState([]);

  //API hook
  const setInput = e => {
    const input = e.target.value;
    const options = {
      method: 'GET',
      url: 'https://gamerpower.p.rapidapi.com/api/giveaways',
      params: {platform: input},
      headers: {
        'x-rapidapi-host': 'gamerpower.p.rapidapi.com',
        'x-rapidapi-key': 'cfe536908dmsh1a523e1c7bd239fp1f9aebjsne6745a54d533' //Not secure
      }
    };
    axios.request(options).then( (response) => {
      setGameData(response.data)
    }).catch( (error) => {
      console.error(error);
    });
  }

  return (
    <div className="App">
      <header><h1 style={styles.h1}>GamesFree</h1></header>
      <main>
      {/* Select form */}
        <form>
        {/* input */}
          <label htmlFor="platform">Choose a platform:</label>
          <select onChange={setInput} id="platInput">
            <option value="Select a Platform" hidden>Select a Platform</option>
            <option value="steam">Steam</option>
            <option value="pc">PC</option>
            <option value="ps5">Playstation 5</option>
            <option value="xbox-one">Xbox One</option>
          </select>
        </form>

      {/* output */}
        <ul>
          { gameData.map(game => {
                if(gameData != null){
                  return (
                    <li key={game.id}>
                      <strong>{game.title}</strong> -<br/> {game.description} 
                    </li>
                  )
                }
            })}
        </ul>
      </main>
    </div>
  );
}

export default App;

const styles = {
  h1: {
    textAlign: 'center'
  }
}
