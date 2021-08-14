import React from "react";
import styled from "styled-components";

const LandingPage = (props) => {
  return (
    <>
      <Container>
        {props.children}
        <Background></Background>
        <Box>
          <Content>
            <Title>Unlimited movies, TV shows and more.</Title>
            <SubTitle>Watch anywhere. Cancel anytime.</SubTitle>
            <Form>
              <FormTitle>
                Ready to watch? Enter your email to create or restart your
                membership.
              </FormTitle>
              <input
                type='text'
                placeholder='Email address
            '
              />
              <button>Get started</button>
            </Form>
          </Content>
        </Box>
      </Container>
      <Section>
        <Wrap>
          <div>
            <h1>Enjoy on your TV.</h1>
            <h2>
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </h2>
          </div>
          <div>
            <video autoPlay={true} playsInline={true} loop={true}>
              <source src='./vedioes/video-tv-in-0819.m4v' type='video/mp4' />
            </video>
          </div>
        </Wrap>
      </Section>
    </>
  );
};

export default LandingPage;
const Section = styled.div`
  background-color: black;
  height: 25rem;
  border-top: 8px solid #222;
`;

const Wrap = styled.div`
  padding: 70px 45px;
  display: flex;
  align-items: center;
  flex-basis: 50%;
  flex-direction: row;
  max-width: 1100px;
  margin: 0 auto;
  width: 80%;
  div {
    padding: 0 3rem 0 0;
    position: relative;
    margin-left: 20px;
    max-width: 600px;
    width: 100%;
    height: 100%;
    video {
      width: 100%;
      height: 100%;
    }
  }
  h1 {
    font-size: 3.125rem;
    line-height: 1.1;
    margin-bottom: 0.5rem;
  }
  h2 {
    margin: 0.75em 0 0.25em;
    padding: 0 5px;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 640px;
  text-align: center;
`;
const Title = styled.div`
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
`;
const SubTitle = styled.div`
  font-size: 1.6rem;
  line-height: 1.1;
  font-weight: 500;
  margin: 1rem auto;
`;
const FormTitle = styled.div`
  min-width: 450px;
  margin: 0 auto;
  font-weight: 400;
  font-size: 20px;
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  input {
    height: 44px;
    padding: 10px;
    font-size: 1.5rem;
    outline: none;
    border-radius: 4px;
    border: none;
    margin: 10px;
  }
  button {
    min-height: 40px;
    min-width: 74px;
    width: auto;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    border: none;
    font-weight: 400;
    background-color: #e21717;
    color: white;
    margin: 20px 15rem;
    padding: 0 1em;
    font-size: 1.2rem;
  }
`;
const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  height: 80vh;
  position: relative;
`;
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 6;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.872),
      rgba(0, 0, 0, 0.472)
    ),
    url("images/background.jpg");
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
