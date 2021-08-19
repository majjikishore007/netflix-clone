import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Background from "./Background";
import "../styles/login.css";
import "../styles/signup.css";

import Fotter from "./Fotter";
import { auth, provider } from "../firebase";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        console.log("error", error);
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  const signUp = () => {
    console.log(`Email ${email} and passswoed ${password}`);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <div>
      <Background>
        <Container>
          <div className="container-signin">
            <div>
              <h1>Sign Up</h1>
            </div>
            <div className="form">
              <div>
                <input
                  value={email}
                  type="email"
                  placeholder="Email address"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <input
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div>
                <button className="rounded">
                  <div>
                    {" "}
                    <img src="https://img.icons8.com/color/48/000000/google-logo.png" />
                  </div>
                  <div className="titles">Sign up with Google</div>
                </button>
              </div>
              <div>
                <div className="rounded">
                  <div>
                    {" "}
                    <img src="https://img.icons8.com/color/48/000000/facebook-circled--v1.png" />
                  </div>
                  <div className="titles">Sign up with Facebok</div>
                </div>
              </div>
              <div>
                <button onClick={signIn} className="button">
                  Sign Up
                </button>
              </div>
              {/* <div>
                New to Netflix?{" "}
                <Link to="/signup">
                  <a href=""> Sign up now</a>
                </Link>{" "}
                . This page is protected by Google reCAPTCHA to ensure you're
                not a bot. Learn more.
              </div> */}
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

  justify-content: center;
  align-items: center;
`;

export default SignUp;
