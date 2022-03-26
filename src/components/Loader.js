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
        margin: "5rem 50%",
      }
}
