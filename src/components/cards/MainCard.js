import React from "react";
import MainBtn from "../btns/MainBtn";

const MainCard = props =>{
    return(
        <article style={styles.card}>
            <div style={styles.cardImg}>
                <img src={props.cardImg} alt={props.cardImgAlt} />
            </div>
            <div style={styles.cardContent}>
                <h2>{props.cardHeader}</h2>
                <p>{props.cardContent}</p>
            
                <div style={styles.cardFooter}>
                    <div style={cardPills}>
                        <Pill pillTxt={props.pill1Txt}/>
                        <Pill pillTxt={props.pill2Txt}/>
                        <Pill pillTxt={props.pill3Txt}/>
                    </div>
                    <MainBtn btnTxt="Go to Giveaway"/>
                </div>
            </div>
        </article>
    )
}

export default MainCard;

const styles = {
    card: {
        display: "flex",
    },
    cardImg: {
        width: "33%"
    },
    cardContent: {
        display: "flex",
        flexDirection: "column"
    },
    cardFooter: {
        display: "flex",
        alignItems: "center"
    }
}