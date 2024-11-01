import React from 'react';
import './Features.css';

export const Features = () => {
  return (
    <section className="features" id="features">
      <div className="feature-cards">
        <div className="feature-card">
          <h3>For Creators</h3>
          <p>Create production-quality visual assets for your projects with unprecedented quality, speed, and style-consistency.</p>
        </div>
        <div className="feature-card">
          <h3>For Teams</h3>
          <p>Bring your team's best ideas to life at scale, with our intuitive AI-first creative suite designed for collaboration and built for business.</p>
        </div>
        <div className="feature-card">
          <h3>For Developers</h3>
          <p>Experience content creation excellence with Leonardo.AI's API. With unmatched scalability, effortlessly tailor outputs to your brand guideline</p>
        </div>
      </div>
      <div className='featuredIn'>
        <h1>As Featured In</h1>
        <img src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/07/fortune.svg" alt="" />
        <img src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/07/forbes.svg" alt="" />
        <img src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/07/techcrunch.svg" alt="" />
        <img src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/07/business-insider.svg" alt="" />
        <img src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/07/smart-company.svg" alt="" />
        <img src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/07/financial-review.svg" alt="" />
      </div>
    </section>
  );
}

export default Features;
