import React from "react";
import Nav from "./Nav"
import Search from "./Search"

const Header = props =>{
    return (
        <header style={styles.header}>
            <Nav />
            <h1>GamesFree</h1>
            <Search />
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
    }
}