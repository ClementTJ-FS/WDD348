import React from "react";

const Pill = props =>{
    return(
        <button style={styles.pill}>
            {props.pillTxt}
        </button>
    )
}

export default Pill;

const styles = {
    pill: {
        background: "transparent",
        color: "#fff",
        padding: ".5rem",
        borderRadius: "50px",
        border: "2px solid #fff",
        margin: "0 .2rem"
    }
    
}