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
        boxShadow: "0px 5px 10px rgba(0,0,0,1)",
        background: "#1E2429",
        color: "#fff",
        height: "3.5rem",
    },
    side:{
        width: "25%"
    }
}