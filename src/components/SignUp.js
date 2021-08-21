import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Background from "./Background";
import "../styles/login.css";
import "../styles/signup.css";
import Fotter from "./Fotter";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <Background>
        <Container>
          <div className='container-signin'>
            <div>
              <h1>Sign Up</h1>
            </div>
            <div className='form'>
              <div>
                <input
                  value={email}
                  type='email'
                  placeholder='Email address'
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <input
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type='password'
                  placeholder='Password'
                />
              </div>
              <div>
                <button onClick={() => {}} className='button'>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </Container>
      </Background>
      <Fotter></Fotter>
    </div>
  );
};

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 40em;
  width: 100%;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.75);
  /* height: 60vh; */
  justify-content: center;
  align-items: center;
  padding: 3em;
`;

export default SignUp;
