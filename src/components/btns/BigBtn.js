import React from "react";

const BigBtn = props =>{
    return (
        <button style={styles.btn} type="button" aria-label="button">
            {props.btnTxt}
        </button>
    )
}

export default BigBtn;

const styles = {
    btn: {
        padding: ".5rem",
        color: "#fff",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        fontWeight: "bold",
        background: "#1C7DB7",
        fontSize: "1.7rem"
    }
}