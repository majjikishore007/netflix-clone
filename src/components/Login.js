import React from "react";
import styled from "styled-components";
import Background from "./Background";
import "../styles/login.css";
import Fotter from "./Fotter";
const Login = () => {
  return (
    <div>
      <Background>
        <Container>
          <div className='container-signin'>
            <div>
              <h1>Sign In</h1>
            </div>
            <div className='form'>
              <div>
                <input type='email' placeholder='Email address' />
              </div>
              <div>
                <input type='password' placeholder='Password' />
              </div>
              <div>
                <button className='button'>Sign In</button>
              </div>
              <div>
                New to Netflix? <a href=''> Sign up now</a> . This page is
                protected by Google reCAPTCHA to ensure you're not a bot. Learn
                more.
              </div>
            </div>
          </div>
        </Container>
      </Background>
      <Fotter></Fotter>
    </div>
  );
};

export default Login;
const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 40em;
  width: 100%;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.75);
  height: 70vh;
  justify-content: center;
  align-items: center;
`;
