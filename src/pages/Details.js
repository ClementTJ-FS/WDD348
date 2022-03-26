import { React, useEffect, useState } from "react";
import axios from "axios";
import BigBtn from "../components/btns/BigBtn";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import styled from "styled-components";

const StyledSection = styled.section`
  width: 50%;
  margin: 1rem auto;

  img{
    width: 100%;
    box-shadow: 5px 5px 10px #000;
  }
  ul{
    list-style: none inside;
    padding: 0;
    margin: 0;
  }
  .row{
    display: flex;
    gap: 25%;
  }
  .col1 {
    width: 50%;
  }
  .col2 {
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  p{
    margin: 0;
  }
  @media (max-width: 960px) {
    width: 90%;
    h1{
      font-size: 24px;
      margin-bottom: 1rem;
    }
    ul{
      display: flex;
      justify-content: flex-start;
      gap: 10%;
      flex-wrap: wrap;
    }
    span{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: .2rem;
    }
    p{
      margin-bottom: 1rem;
    }
    a{
      margin: 1rem auto;
    }
    .row {
      flex-direction: column;
      width: 100%;
    }
    .col1, .col2 {
    width: 100%;
  }
  }
`;

const Details = ({ loading, setLoading }) => {
  //from API
  const [details, setDetails] = useState([]);
  let { id } = useParams();

  //API hook to get details. - uses id from App
  useEffect(() => {
    setLoading(true);
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
          setLoading(false);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
    GetData();
  }, [id, setLoading]);

  //render
  return (
    <section>
      {loading ? (
        <Loader />
      ) : (
        <StyledSection>
          <div className="imgContainer">
            <img src={details.image} alt={details.title} />
          </div>
          <h1>{details.title}</h1>
          <div className="row">
            <div className="col1">
              <p>{details.description}</p>
              <h2>Instructions</h2>
              <div style={{ whiteSpace: "pre-wrap" }}>
                <p>{details.instructions}</p>
              </div>
            </div>
            <div className="col2">
              <ul>
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
                    {details.platforms}
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
              <a
                href={details.open_giveaway_url}
                target="_blank"
                rel="noreferrer"
                aria-label="Link to giveaway"
              >
                <BigBtn btnTxt="Go to Giveaway" />
              </a>
            </div>
          </div>
        </StyledSection>
      )}
    </section>
  );
};
export default Details;
