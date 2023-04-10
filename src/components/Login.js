/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { setUserLogin } from '../data/auth/UserSlice';
import { facebookSignIn, googleSignIn } from '../data/auth/auth_helper';
import '../styles/login.css';
import Background from './Background';
import Fotter from './Fotter';
const Login = () => {
  let [loading, setLoading] = useState(true);
  // let [color, setColor] = useState("#ffffff");
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const googlelogin = () => {
    googleSignIn()
      .then((result) => {
        // console.log(result);
        // var credential = result.credential;
        var user = result.user;
        // var accessToken = credential.accessToken;
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );

        setTimeout(() => {
          history.push('/home');
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const facebooklogin = () => {
    facebookSignIn()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
                <button
                  onClick={() => {
                    setLoading(!loading);
                  }}
                >
                  Sign In
                </button>
              </div>

              <div className='under'>
                <span className='underline'></span>
                <span> OR </span>
                <span className='underline'></span>
              </div>
              <div>
                <button className='btn-rounded' onClick={googlelogin}>
                  <div className='img1'>
                    {' '}
                    <img src='https://img.icons8.com/color/48/000000/google-logo.png' />
                  </div>
                  <div className='titles'>Sign In with Google</div>
                </button>
              </div>
              {/* <div>
                <button className='btn-rounded ' onClick={facebooklogin}>
                  <div className='img1'>
                    {' '}
                    <img src='https://img.icons8.com/color/48/000000/facebook-circled--v1.png' />
                  </div>
                  <div className='titles'>Sign In with Facebok</div>
                </button>
              </div> */}
              <div>
                New to Netflix?{' '}
                <Link to='/signup'>
                  <a href=''> Sign up now</a>
                </Link>{' '}
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
