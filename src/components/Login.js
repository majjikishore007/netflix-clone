import React, { useState } from "react";
import styled from "styled-components";
import Background from "./Background";
import "../styles/login.css";
import Fotter from "./Fotter";
import { Link } from "react-router-dom";
import { facebookSignIn, googleSignIn } from "../data/auth/auth_helper";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
                <input
                  value={email}
                  type='email'
                  placeholder='Email address'
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div>
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
                  Sign In
                </button>
              </div>

              <div className='under'>
                <span className='underline'></span>
                <span> OR </span>
                <span className='underline'></span>
              </div>
              <div>
                <button className='btn-rounded' onClick={googleSignIn}>
                  <div className='img1'>
                    {" "}
                    <img src='https://img.icons8.com/color/48/000000/google-logo.png' />
                  </div>
                  <div className='titles'>Sign In with Google</div>
                </button>
              </div>
              <div>
                <button className='btn-rounded' onClick={facebookSignIn}>
                  <div className='img1'>
                    {" "}
                    <img src='https://img.icons8.com/color/48/000000/facebook-circled--v1.png' />
                  </div>
                  <div className='titles'>Sign In with Facebok</div>
                </button>
              </div>
              <div>
                New to Netflix?{" "}
                <Link to='/signup'>
                  <a href=''> Sign up now</a>
                </Link>{" "}
                . This page is protected by Google reCAPTCHA to ensure you're
                not a bot. Learn more.
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
  max-width: 35em;
  width: 100%;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.75);
  // height: 70vh;
  justify-content: center;
  align-items: center;
  padding: 3em;
`;
