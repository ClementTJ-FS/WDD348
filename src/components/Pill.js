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
        background: "teal",
        color: "#fff",
        padding: "5px",
        borderRadius: "50px"
    }
}