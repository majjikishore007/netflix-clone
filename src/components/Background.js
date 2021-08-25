import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Background = (props) => {
  return (
    <Container>
      <Header>
        <Navbar></Navbar>
        {props.children}
      </Header>
    </Container>
  );
};

export default Background;

const Container = styled.div`
  width: 100%;
  position: relative;
  border-bottom: 8px solid #222;
`;
const Header = styled.div`
  height: 70vh;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.672),
      rgba(0, 0, 0, 0.472)
    ),
    url("images/background.jpg");
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: relative;
  z-index: 1;
  opacity: 1.8;
  img {
    width: 100%;
    height: 100%;
  }
`;
