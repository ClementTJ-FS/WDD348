import React from "react";
import Nav from "./Nav"
import HeaderSearch from "./HeaderSearch"
import MediaQuery from 'react-responsive'
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";


const Header = (setSInput) =>{
    return (
        <header style={styles.header}>
            <div style={styles.side}>
            <MediaQuery minWidth={1224}>
                <Nav />
            </MediaQuery>
            <MediaQuery maxWidth={1223}>
                <MobileNav />
            </MediaQuery>
            
            </div>
            <div style={styles.mid}>
                <Link to="/"><h1>GamesFree</h1></Link>
            </div>
            <div style={styles.side}>
                <HeaderSearch setSInput={setSInput} />
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
        position: "fixed",
        top: "0"
    },
    side:{
        width: "25%",
    }
}