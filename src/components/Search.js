import React from "react";
import {FaSearch} from "react-icons/fa";
import { Link } from "react-router-dom";

const Search =({setSInput})=>{
    
  //sets the searchInput state - Sets local storage for preservation on reload(might change this.)
    const handleChange = e =>{
        setSInput(e.target.value);
        localStorage.setItem("search", e.target.value)
    };

    return(
        <form style={styles.sForm}>
            <div>
                <input id="search" type="text" placeholder={localStorage.getItem("search") ? localStorage.getItem("search") : "Search"} style={styles.sInput} onChange={handleChange}/>
            </div>
            <div>
                <Link to= "/results">
                    <button style={styles.sBtn}><FaSearch /></button>
                </Link>
            </div>
        </form>
    )     
};
export default Search;

const styles = {
  sForm:{
      display: "flex",
      alignItems: "center",  
      width: "25rem"
  },
  sBtn:{
      background: "#fff",
      border: "none",
      position: "relative",
      right: "30px",
      cursor: "pointer"
  },
  sInput:{
      width: "25rem",
      padding: "1rem .2rem"

  }
}