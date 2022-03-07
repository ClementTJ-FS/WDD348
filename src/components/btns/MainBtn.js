import React from "react";

const MainBtn = props =>{
    return (
        <button style={styles.btn} >
            {props.btnTxt}
        </button>
    )
}

export default MainBtn;

const styles = {
    btn: {
        padding: ".5rem",
        color: "#000",
        background: "#ffe",
        borderRadius: "5px",
        border: "none"
    }
}