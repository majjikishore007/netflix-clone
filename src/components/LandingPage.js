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
    </div>
  );
};

export default LandingPage;
