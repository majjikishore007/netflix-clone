import React from "react";
import styled from "styled-components";
const Header = () => {
  return (
    <Nav>
      <Logo>
        <img src='/images/netflix.svg' alt='' />
      </Logo>
      <NavContainer>
        <SignUp>Sign Up</SignUp>
      </NavContainer>
    </Nav>
  );
};

export default Header;
const NavContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

const SignUp = styled.button`
  border-radius: 4px;
  background-color: #e21717;
  color: white;
  width: 90px;
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
  width: 150px;
  img {
    width: 100%;
    height: 100%;
  }
`;
const NavMenu = styled.div``;
