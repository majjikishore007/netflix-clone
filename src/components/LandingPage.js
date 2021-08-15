import React from "react";
import "../styles/landingpage.css";
import Background from "./Background";
const LandingPage = (props) => {
  return (
    <div>
      <Background>
        <div className='content'>
          <div className='contentBox'>
            <div>
              <h1>Unlimited movies, TV shows and more.</h1>
            </div>
            <div>
              <h2>Watch anywhere. Cancel anytime.</h2>
            </div>

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
      </Background>
      <section>
        <div className='container'>
          <div className='split'>
            <div className='split-content'>
              <h2>Enjoy on your TV.</h2>
              <p>
                Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                Blu-ray players and more.
              </p>
            </div>
            <div className='vedio-content'>
              <img src='/images/tv.png' alt='' />
              {console.log("hello")}
              <video width='750' height='500' autoPlay>
                <source src='/vedioes/video-tv-in-0819.m4v' type='video/mp4' />
              </video>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
