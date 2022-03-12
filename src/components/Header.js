import React from "react";
import Nav from "./Nav"
import Search from "./Search"

const Header = () =>{
    return (
        <header style={styles.header}>
            <div style={styles.side}>
                <Nav />
            </div>
            <div style={styles.mid}>
                <h1>GamesFree</h1>
            </div>
            <div style={styles.side}>
                <Search />
            </div>
        </header>
    )
}

export default Header;

const styles = {
    header:{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        boxShadow: "0px 4px 4px rgba(0,0,0,.30)"
    },
    side:{
        width: "25%"
    }
}