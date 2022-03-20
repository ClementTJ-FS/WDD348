import { React, useEffect, useState } from "react";
import axios from "axios";
import BigBtn from "../components/btns/BigBtn";
import { useParams } from "react-router-dom";

const Details = () => {
  //from API
  const [details, setDetails] = useState([]);
  let { id } = useParams();

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
      <div style={styles.imgContainer}>
        <img src={details.image} alt={details.title} style={styles.image} />
      </div>
      <h1 style={styles.title}>{details.title}</h1>
      <div style={styles.row}>
        <div style={styles.col1}>
          <p>{details.description}</p>
          <h2>Instructions</h2>
          <div style={{ whiteSpace: "pre-wrap" }}>
            <span>{details.instructions}</span>
          </div>
        </div>
        <div style={styles.col2}>
          <ul style={styles.ul}>
            <li>
              <span>
                <strong>Status: </strong>
                {details.status}
              </span>
            </li>
            <li>
              <span>
                <strong>Type: </strong>
                {details.type}
              </span>
            </li>
            <li>
              <span>
                <strong>Platform: </strong>
                {details.platform}
              </span>
            </li>
            <li>
              <span>
                <strong>Worth: </strong>
                {details.worth}
              </span>
            </li>
            <li>
              <span>
                <strong>End-Date: </strong>
                {details.end_date}
              </span>
            </li>
          </ul>
          <a href={details.open_giveaway_url} target="_blank" rel="noreferrer">
            <BigBtn btnTxt="Go to Giveaway" />
          </a>
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
  imgContainer: {
    flex: "2",
  },
  image: {
    width: "100%",
  },
  ul: {
    listStyle: "none inside",
    padding: "0",
    margin: "1rem 0",
  },
  row: {
    display: "flex",
  },
  col1: {
    width: "50%",
  },
  col2: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
};
