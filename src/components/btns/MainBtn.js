import React from "react";

const MainBtn = props =>{
    return (
        <form action={props.gaUrl}>
            <button style={styles.btn} type="submit" formTarget="_blank">
                {props.btnTxt}
            </button>
        </form>
    )
}

export default MainBtn;

const styles = {
    btn: {
        padding: ".5rem",
        color: "#000",
        background: "#ffe",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer"
    }
}