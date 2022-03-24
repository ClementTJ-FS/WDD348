import React from "react";

const MainBtn = props =>{
    return (
        <button style={styles.btn} type="button" aria-label="button">
            {props.btnTxt}
        </button>
    )
}

export default MainBtn;

const styles = {
    btn: {
        padding: ".5rem",
        color: "#fff",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        fontWeight: "bold",
        background: "#1C7DB7"
    }
}