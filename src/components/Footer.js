import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  height: 7rem;
  background: #1e2429;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  a{
    color: #1c7db7
  }

  .contact{
    font-size: 150%
  }

  @media(max-width: 960px){
    display: none;
  }
`;
function Footer() {
  return (
    <StyledFooter style={styles.footer}>
      <a className="contact" href="mailto: tj.clement0@gmail.com">Contact</a>
      <span>
        Powered by:{" "}
        <a href="https://www.gamerpower.com/api-read" target="_blank">
          Gamer Power API
        </a>
      </span>
    </StyledFooter>
  );
}

export default Footer;

const styles = {};
