import React from "react";
import MainBtn from "../btns/MainBtn";
import Pill from "../Pill";

const MainCard = props =>{
    return(
        <article style={styles.card}>
            <div>
                <img src={props.cardImg} alt={props.cardImgAlt} style={styles.cardImg}/>
            </div>
            <div style={styles.cardContent}>
                <h2 style={styles.cardHeader}>{props.cardHeader}</h2>
                <p style={styles.cardTxt}>{props.cardContent}</p>
            </div>
            <div style={styles.cardFooter}>
                <div style={styles.cardPills}>
                    <Pill pillTxt={props.pillTxt1}/>
                    <Pill pillTxt={props.pillTxt2}/>
                </div>
                <MainBtn btnTxt="Go to Giveaway" gaUrl={props.gaUrl}/>
            </div>
        </article>
    )
}

export default MainCard;

const styles = {
    card: {
        display: "flex",
        flexDirection:"column",
        width: "100%",
        border: "none",
        boxShadow: "4px 4px 5px rgba(0,0,0,.25)",
        paddingBottom: "1rem",
        borderRadius: "5px"
    },
    cardImg: {
        width: "100%",
        height: "18rem"
    },
    cardContent: {
        display: "flex",
        flexDirection: "column",
        width: "90%",
        margin: "0 auto"
    },
    cardHeader:{
        margin: "0",
        width: "100%",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
    },
    cardTxt:{
        height: "5rem",
        overflow: "hidden",
        textOverflow: "ellipsis",
        
    },
    cardPills: {
        display: "flex",
    },
    cardFooter: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "90%",
        margin:"0 auto"
    }
}