import React from 'react';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="breadcrumbs">Home / About</div>
      <h1>About</h1>
      <div className="about-content">
        <div className="about-text">
          <h2>One of the Fastest Way to Business Growth</h2>
          <p>
            It is a long established fact that a reader will be distracted by the readable content...
          </p>
          <button className="advice-button">Get Instant Professional Advice</button>
        </div>
        <div className="about-image">
          <img src="about-image.jpg" alt="Team Image" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
