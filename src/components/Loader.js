import React from "react";
import BounceLoader from "react-spinners/BounceLoader";

const Loader = () => {
  return (
    <div style={styles.loader}>
      <BounceLoader color={"#2EA0D6"} size={60} />
    </div>
  );
};
export default Loader;

const styles ={
    loader: {
        position: "absolute",
        top: "50%",
        left: "50%"
      }
}
