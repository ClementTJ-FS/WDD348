import React from "react";
import {FaSearch} from "react-icons/fa";

const Search =()=>{
    return(
        <form style={styles.sForm}>
            <div>
                <input id="search" type="text" placeholder="Search" style={styles.sInput}/>
            </div>
            <div>
                <button style={styles.sBtn}><FaSearch /></button>
            </div>
        </form>
    )     
}
export default Search;

const styles = {
    sForm:{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end"
    },
    sBtn:{
        background: "#fff",
        border: "none",
        position: "relative",
        right: "30px",
        cursor: "pointer"
    },
    sInput:{
        padding: "5px"
    }

}