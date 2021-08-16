import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Navbar = () => {
  return (
    <Nav>
      <Logo>
        <Link to='/'>
          <img src='/images/netflix.svg' alt='' />
        </Link>
      </Logo>
      <NavContainer>
        <Link to='/login'>
          <SignUp>Sign In</SignUp>
        </Link>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
const NavContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

const SignUp = styled.button`
  border-radius: 4px;
  background-color: #e21717;
  color: white;
  max-width: 90px;
  width: 100%;
  height: 40px;
  border: none;
  letter-spacing: 1.5px;
  font-size: 14px;
  cursor: pointer;
`;

const Nav = styled.div`
  display: flex;
  height: 80px;
  justify-content: center;
  align-items: center;
  padding: 15px 40px;
`;

const Logo = styled.div`
  max-width: 150px;
  img {
    width: 100%;
    height: 100%;
  }
`;
const NavMenu = styled.div``;
