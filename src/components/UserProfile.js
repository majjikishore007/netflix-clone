import React from "react";
import Navbar from "./Navbar";
import "../styles/profile.css";
import styled from "styled-components";
import { useSelector } from "react-redux";
import {
  selectUserEmail,
  selectUserName,
  selectUserPhoto,
} from "../data/auth/UserSlice";
import { Col, Row } from "react-bootstrap";
const UserProfile = () => {
  const name = useSelector(selectUserName);
  const email = useSelector(selectUserEmail);
  const photo = useSelector(selectUserPhoto);
  return (
    <>
      <div className='profile-nav'>
        <Navbar></Navbar>
      </div>
      <Conatiner>
        <div className='profile-titile'>
          <Row>
            <h1>Account</h1>
            <br />
            <Col>
              <img src={photo} alt='' />
            </Col>
            <Col>
              <h3>Username: {name}</h3>
              <h3>Email: {email}</h3>
            </Col>
          </Row>
        </div>
        <div className='billing'>your billning</div>
        <div className='profiles'>
          <h1>children</h1>
          <h1>mom</h1>
        </div>
      </Conatiner>
    </>
  );
};

export default UserProfile;
const Conatiner = styled.div`
  width: 95%;
  max-width: 1024px;
  font-size: 1em;
  margin: auto;
  color: black;
  & > * {
    border-bottom: 1px solid black;
  }
`;
