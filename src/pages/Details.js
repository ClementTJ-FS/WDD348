import { React, useEffect, useState } from "react";
import axios from "axios";
import MainBtn from "../components/btns/MainBtn";


const Details = ({ id }) => {
  //from API
  const [details, setDetails] = useState([]);

  //API hook to get details. - uses id from App
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://gamerpower.p.rapidapi.com/api/giveaway",
      params: { id: id },
      headers: {
        "x-rapidapi-host": "gamerpower.p.rapidapi.com",
        "x-rapidapi-key": "cfe536908dmsh1a523e1c7bd239fp1f9aebjsne6745a54d533",
      },
    };
    function GetData() {
      axios
        .request(options)
        .then(function (response) {
          setDetails(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
    GetData();
  }, [id]);

  //render
  return (
    <section style={styles.container}>
      <div>
        <img src={details.image} alt={details.title} style={styles.image} />
      </div>
      <h1 style={styles.title}>{details.title}</h1>
      <div style={styles.content}>
        <p>{details.description}</p>
        <div style={{ whiteSpace: "pre-wrap" }}>
          <h2>Instructions</h2>
          <span>{details.instructions}</span>
        </div>
        <div style={styles.btn}>
            <a href={details.open_giveaway_url} target="_blank" rel="noreferrer"><MainBtn btnTxt="Go to Giveaway" /></a>
        </div>
     </div>
    </section>
  );
};
export default Details;

const styles = {
  container: {
    width: "50%",
    margin: "1rem auto",
  },
  image: {
    width: "100%",
  },
  content: {
    width: "50%",
  },
  title: {
    width: "100%",
  },
};
