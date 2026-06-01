import React, { useState } from 'react';

const STATIC_STORIES = [
  { id: 1, type: 'Tech', headline: 'Modular Applications Accelerate Runtime Metrics', body: 'Engineers highlight structural decoupling as a key factor in deployment speeds.' },
  { id: 2, type: 'Finance', headline: 'Global Assets Balance Out Following Regulatory Adjustments', body: 'Commercial indices reach record stability parameters as regional supply chains synchronize.' },
  { id: 3, type: 'Tech', headline: 'State Management Systems Complete Native Code Audits', body: 'Core development teams report flawless execution behaviors under stress tests.' },
  { id: 4, type: 'Sports', headline: 'Analytics Modules Redefine Physical Preparation Programs', body: 'Performance fields leverage precision tracking software to regulate team fatigue indexes.' }
];

function News() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchWord, setSearchWord] = useState('');

  const filteredData = STATIC_STORIES.filter(item => {
    const categoryMatches = activeCategory === 'All' || item.type === activeCategory;
    const textMatches = item.headline.toLowerCase().includes(searchWord.toLowerCase());
    return categoryMatches && textMatches;
  });

  return (
    <div className="news-container">
      <h2>Journal Directory</h2>

      <div className="dashboard-controls">
        <input 
          type="text" 
          placeholder="Filter headings..."
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
          className="search-field"
        />
        <div className="pill-group">
          {['All', 'Tech', 'Finance', 'Sports'].map(cat => (
            <button
              key={cat}
              className={`pill-btn ${activeCategory === cat ? 'selected' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="articles-stack">
        {filteredData.length > 0 ? (
          filteredData.map(article => (
            <article key={article.id} className="article-strip">
              <span className="strip-tag">{article.type}</span>
              <h3>{article.headline}</h3>
              <p>{article.body}</p>
            </article>
          ))
        ) : (
          <p className="fallback-text">No articles found matching those specific filters.</p>
        )}
      </div>
    </div>
  );
}

export default News;