import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import {
  selectUserName,
  selectUserPhoto,
  setUserSignout,
} from "../data/auth/UserSlice";
import "../styles/navbar.css";
const Navbar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);
  const photo = useSelector(selectUserPhoto);
  const signout = () => {
    dispatch(setUserSignout());
    setTimeout(() => {
      history.push("/");
    }, 1000);
  };
  const loadSpinner = () => {};
  return (
    <>
      {}
      <Nav>
        <nav className='navbar navbar-expand-lg navbar-light'>
          <div className='container-fluid'>
            <Logo className='animate__bounceIn'>
              <Link to='/'>
                <img src='/images/netflix.svg' alt='' />
              </Link>
            </Logo>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              {name && (
                <ul className='navbar-nav me-auto mb-4 mb-lg-0'>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/home'>
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link'>
                      <a>TV Shows</a>
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/movies'>
                      <a>Movies</a>
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/new&popular'>
                      <a>New&Popular</a>
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link'>
                      <a>My List</a>
                    </Link>
                  </li>
                </ul>
              )}

              <NavContainer>
                {name ? (
                  <li class='nav-item dropdown' style={{ listStyle: "none" }}>
                    <div
                      className='user-icon nav-link dropdown-toggle'
                      id='navbarDropdownMenuLink'
                      role='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='true'
                    >
                      <img src={photo} alt='' />
                    </div>
                    <ul
                      class='dropdown-menu'
                      aria-labelledby='navbarDropdownMenuLink'
                    >
                      <li>
                        <Link className='dropdown-item' to='/profile'>
                          Profile
                        </Link>
                        <button className='dropdown-item' onClick={signout}>
                          Signout
                        </button>
                      </li>
                    </ul>
                  </li>
                ) : (
                  <Link to='/login'>
                    <SignUp>Sign In</SignUp>
                  </Link>
                )}
              </NavContainer>
            </div>
          </div>
        </nav>
      </Nav>
    </>
  );
};

export default Navbar;
const NavContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
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
  /* display: flex; */
  height: 80px;
  /* justify-content: center; */
  /* align-items: center; */
  padding: 0px 10px;
  @media (max-width: 768px) {
    background: black;
  }
`;

const Logo = styled.div`
  margin: 5px 5px;
  max-width: 150px;
  img {
    width: 100%;
    height: 100%;
  }
`;
const NavMenu = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  margin-left: 3em;
  a {
    margin: 0 4px;
    text-decoration: none;
    color: #fff;
  }
  a:hover {
    color: #e5e5e5;
  }
`;
const SecondaryNav = styled.div`
  display: flex;
  flex: -1;
  div {
    margin: 0px 7px;
  }
`;