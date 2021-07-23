import React from "react";

function AboutPage() {
  return (
    <div className="about-page">
      <div className="section-title">
        <h1>About Me</h1>
      </div>
      <div>
        <img src={process.env.PUBLIC_URL + "/images/profile.JPG"}></img>
      </div>
      <p className="description">
        I am a 2nd year Computing student at Imperial College London. Cheerful
        and friendly are the best words to describe myself. I am curious about
        technology and I like to challenge myself. I’ve always have a “Work
        Hard, Play Hard” attitude!
      </p>
    </div>
  );
}

export default AboutPage;
