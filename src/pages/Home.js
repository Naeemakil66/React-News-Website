import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [likes, setLikes] = useState([142, 88]);

  const handleLike = (index) => {
    const updatedLikes = [...likes];
    updatedLikes[index] += 1;
    setLikes(updatedLikes);
  };

  return (
    <div className="home-container">
      <div className="breaking-ticker">
        <span className="ticker-label">BREAKING NEWS</span>
        <p className="ticker-content">Lebanon's prime minister has accused Israel of carrying out "collective punishment".</p>
      </div>

      <header className="hero-banner">
        <h1>Unbiased Global Journalism. Clean Components.</h1>
        <p>Your centralized feed for breaking dispatches, feature coverage, and editorial items.</p>
        <button className="hero-btn" onClick={() => navigate('/news')}>
          Browse Newsroom
        </button>
      </header>

      <section className="stories-grid">
        <div className="story-card">
          <span className="badge category-global">Global</span>
          <h3>Fuel and petroleum product prices</h3>
          <p>As a result of the war between America and Iran, prices in this market have risen significantly.</p>
          <button className="like-btn" onClick={() => handleLike(0)}>
            👍 {likes[0]}
          </button>
        </div>

        <div className="story-card">
          <span className="badge category-culture">Culture</span>
          <h3>The Rise of Generative Art</h3>
          <p>Exploring how neural networks and algorithmic creativity are challenging traditional definitions of authorship in the modern art world.</p>
          <button className="like-btn" onClick={() => handleLike(1)}>
            👍 {likes[1]}
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;