import React, { useState } from 'react';

function About() {
  const [visibleTab, setVisibleTab] = useState(null);

  const entries = [
    { label: "Local Stories & Global Perspectives.", description: "We created this web platform to deliver real-time local and global news through a highly optimized, responsive user experience. Built as a hands-on project to demonstrate clean component architecture and dynamic data fetching." },
    { label: "The Daily Chronicle: A Modern News Platform", description: "This website was designed and developed to streamline how local and international news is delivered. Using modern front-end frameworks, our project focuses on clean layouts, state management, and seamless navigation for the reader." }
  ];

  return (
    <div className="about-container">
      <h2>Platform Profile</h2>
      <p className="intro-paragraph">
        Our system delivers high-speed news about lebanon, and global news
      </p>

      <div className="accordion-wrapper">
        {entries.map((item, index) => (
          <div key={index} className="accordion-node">
            <div className="accordion-header" onClick={() => setVisibleTab(visibleTab === index ? null : index)}>
              <h4>{item.label}</h4>
              <span>{visibleTab === index ? '▲' : '▼'}</span>
            </div>
            {visibleTab === index && (
              <div className="accordion-body">
                <p>{item.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;