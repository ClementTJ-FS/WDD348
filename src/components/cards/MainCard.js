import {React} from "react";
import { Link } from "react-router-dom";
import MainBtn from "../btns/MainBtn";
import Pill from "../Pill";

const MainCard = (props) =>{
    //sets the GaDetails state to the cardId
    const handleClick = () =>{
        localStorage.setItem("id", JSON.stringify(props.cardId))
        props.setId(props.cardId)
    }
    return(
        <article style={styles.card} >
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
                <div style={styles.cardBtns}>
                <div onClick={handleClick}>
                    <Link to="/details" >
                    <MainBtn btnTxt="Details" />
                    </Link>
                </div>                   
                    <a href={props.gaUrl} target="_blank" rel="noreferrer"><MainBtn btnTxt="Go to Giveaway" /></a>
                </div>
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
        boxShadow: "5px 5px 10px rgba(0,0,0,1)",
        paddingBottom: "1rem",
        borderRadius: "5px",
        background: "#1E2429",
        color: "#fff"
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
    cardBtns: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: ".5rem"
    },
    cardFooter: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "90%",
        margin:"0 auto"
    }
}