import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../styles/navbar.css";
const Navbar = () => {
  return (
    <>
      <Nav>
        <nav className='navbar navbar-expand-lg navbar-light'>
          <div className='container-fluid'>
            <Logo>
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
                  <Link className='nav-link'>
                    <a>Movies</a>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link'>
                    <a>New&Popular</a>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link'>
                    <a>My List</a>
                  </Link>
                </li>
              </ul>
              <NavContainer>
                <Link to='/login'>
                  <SignUp>Sign In</SignUp>
                </Link>
              </NavContainer>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  id='navbarDropdown'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Dropdown
                </a>
                <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Action
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className='dropdown-divider' />
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </div>
          </div>
        </nav>
      </Nav>

      {/*  */}
      {/* <Nav>
        <Logo>
          <Link to='/'>
            <img src='/images/netflix.svg' alt='' />
          </Link>
        </Logo>
        <NavMenu>
          <Link>
            <a>Home</a>
          </Link>
          <Link>
            <a>TV Shows</a>
          </Link>
          <Link>
            <a>Movies</a>
          </Link>
          <Link>
            <a>New&Popular</a>
          </Link>
          <Link>
            <a>My List</a>
          </Link>
        </NavMenu>
        <SecondaryNav>
          <div>
            <a href=''>account</a>
          </div>
          <div>
            <a href=''>account</a>
          </div>
        </SecondaryNav>
        <NavContainer>
          <Link to='/login'>
            <SignUp>Sign In</SignUp>
          </Link>
        </NavContainer>
      </Nav> */}
    </>
  );
};

export default Navbar;
const NavContainer = styled.div`
  display: flex;
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
  /* display: flex; */
  height: 80px;
  /* justify-content: center; */
  /* align-items: center; */
  /* padding: 15px 40px; */
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