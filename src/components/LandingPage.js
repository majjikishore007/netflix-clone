import React from "react";
import styled from "styled-components";
import "../styles/landingpage.css";
const LandingPage = (props) => {
  return (
    <Container>
      <Header>
        {props.children}
        <div className='content'>
          <div className='contentBox'>
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>

            <div className='form'>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
              <div className='details'>
                <input type='email' placeholder='Email address' />
                <button className='btn'>Get started</button>
              </div>
            </div>
          </div>
        </div>
      </Header>

      <section>
        <div>
          <h1>helloo</h1>
        </div>
      </section>
      <section>
        <div>
          <h1>helloo</h1>
        </div>
      </section>
      <section>
        <div>
          <h1>helloo</h1>
        </div>
      </section>
    </Container>
  );
};

export default LandingPage;

const Container = styled.div`
  width: 100%;
  position: relative;
`;
const Header = styled.div`
  height: 80vh;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.672),
      rgba(0, 0, 0, 0.472)
    ),
    url("images/background.jpg");
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: relative;
  z-index: 1;
  opacity: 1.8;
  img {
    width: 100%;
    height: 100%;
  }
`;
const StoryContent = styled.div``;