import React, { useEffect } from "react";
import "../styles/landingpage.css";
import Background from "./Background";
import ReactPlayer from "react-player";
const LandingPage = () => {
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
              <video width='750' height='500' autoPlay>
                <source src='/vedioes/video-tv-in-0819.m4v' type='video/mp4' />
              </video>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <div className='split'>
            <div className='vedio-content'>
              <img src='/images/mobile-0819.jpg' alt='' />
              <div className='animation'>
                <div className='animation-img'>
                  <img src='/images/boxshot.png' alt='' />
                </div>
                <div className='animation-content'>
                  <div style={{ fontWeight: "bold" }}>Stranger Things</div>
                  <div style={{ color: "blue" }}>Downloading...</div>
                </div>
                <div>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src='/images/download-icon.gif'
                    alt=''
                  />
                </div>
              </div>
            </div>
            <div className='split-content'>
              <h2>Download your shows to watch offline.</h2>
              <p>
                Save your favourites easily and always have something to watch.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <div className='split'>
            <div className='split-content'>
              <h2>Watch everywhere.</h2>
              <p>
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV.
              </p>
            </div>
            <div className='vedio-content'>
              <img src='/images/device-pile-in.png' alt='' />
              <video
                style={{
                  width: "60%",
                  height: "56%",
                  top: "0px",
                  left: "19%",
                }}
                autoPlay
              >
                <source src='/vedioes/video-devices-in.m4v' type='video/mp4' />
              </video>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <div className='split'>
            <div className='vedio-content'>
              <img
                src='/images/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png'
                alt=''
              />
            </div>
            <div className='split-content'>
              <h2>Create profiles for children.</h2>
              <p>
                Send children on adventures with their favourite characters in a
                space made just for them—free with your membership.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
