import React from "react";
import styled from "styled-components";
const Fotter = () => {
  return (
    <div>
      <FtBox>
        <Container>
          <div>
            {" "}
            <A>Questions? Call 000-800-040-1843</A>
          </div>
          <Grid>
            <div>
              {" "}
              <a href=''>FAQ</a>{" "}
            </div>
            <div>
              {" "}
              <a href=''>Investor Relations</a>{" "}
            </div>
            <div>
              {" "}
              <a href=''>Privacy</a>{" "}
            </div>
            <div>
              {" "}
              <a href=''>Speed Test</a>{" "}
            </div>
            <div>
              {" "}
              <a href=''>Help Centre</a>{" "}
            </div>
            <div>
              {" "}
              <a href=''>Jobs</a>{" "}
            </div>
            <div>
              {" "}
              <a href=''>Cookie Preferences</a>{" "}
            </div>
            <div>
              {" "}
              <a href=''>Legal notices</a>{" "}
            </div>
            <div>
              {" "}
              <a href=''>Account</a>{" "}
            </div>
            <div>
              {" "}
              <a href=''>Ways to Watch</a>{" "}
            </div>
            <div>
              {" "}
              <a href=''>Corporate Information</a>{" "}
            </div>
            <div>
              {" "}
              <a href=''>Only on Netflix</a>{" "}
            </div>
            <div>
              {" "}
              <a href=''>Media Centre</a>{" "}
            </div>
            <div>
              {" "}
              <a href=''>Terms of Use</a>{" "}
            </div>
            <div>
              {" "}
              <a href=''>Contact Us</a>{" "}
            </div>
          </Grid>
        </Container>
      </FtBox>
    </div>
  );
};

export default Fotter;
const A = styled.a`
  font-size: 1em;
  color: #757575;
  text-decoration: none;
  letter-spacing: 1.4px;
  margin: 4px 4px;
  &:hover {
    color: #757575;
    text-decoration: underline;
  }
`;

const FtBox = styled.div`
  width: 100%;
  background-color: black;
`;
const Container = styled.div`
  color: black;
  padding: 4em;
  width: 70%;
  margin: auto;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  transition: all 250ms ease-in-out;
  div {
    margin: 1em;
    a {
      font-size: 1em;
      color: #757575;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  }
`;
