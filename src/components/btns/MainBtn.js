import React from "react";

const MainBtn = props =>{
    return (
        <button style={styles.btn} type="button">
            {props.btnTxt}
        </button>
    )
}

export default MainBtn;

const styles = {
    btn: {
        padding: ".5rem",
        color: "#000",
        borderRadius: "5px",
        border: "2px solid #000",
        cursor: "pointer",
        fontWeight: "bold"
    }
}