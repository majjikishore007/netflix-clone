import React from "react";
import styled from "styled-components";
import Background from "./Background";
const Login = () => {
  return (
    <div>
      <Background>
        <Container>
          <div className='form'>
            <input type='text' placeholder='name' />
          </div>
        </Container>
      </Background>
    </div>
  );
};

export default Login;
const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  width: 30%;
  margin: auto;
  background-color: black transparent;
  height: 30vh;
`;
