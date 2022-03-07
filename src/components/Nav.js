import React from "react";
import { Link } from "react-router-dom";

const Nav =()=>{
    return(
        <nav style={styles.nav}>
            <Link to="/main" style={styles.link}>
                <p>Giveaways</p>
            </Link>
            <Link to="/games" style={styles.link}>
                <p>Games</p>
            </Link>
            <Link to="/loot" style={styles.link}>
                <p>Loot</p>
            </Link>
        </nav>
    )
}

export default Nav;

const styles ={
    nav:{
        display: "flex",
        justifyContent: "space-between"
    },
    link:{
        padding: "5px"
    }
}