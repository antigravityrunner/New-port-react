import React from 'react';
import ninaImage from '../components/images/nina-selfie.jpg'





const About = () => {
  return (
    <section className="Content">
      <h1>Welcome to my portfolio</h1>

      <section id="aboutMe" className="box">
        <h4 className="boxHeader">About Me:</h4>
        <img
          className="selfieImg"
          src={ninaImage} 
          alt="A picture of myself Nina"
        />
        <br />
        My name is Nina, I'm a mixmedia artist.
        <br />
        I'm learning how to become a full stack web developer.
      </section>
    </section>
  );
}

export default About;