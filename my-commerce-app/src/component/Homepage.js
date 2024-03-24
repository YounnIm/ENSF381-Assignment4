import React, { useEffect, useState } from 'react';
import reviews from '../data/reviews.js';

const logo = process.env.PUBLIC_URL + '/images/logo.png';
// Header Component
const Header = () => {
    return (
      <header style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '20px' }}>
          <img src={logo} alt="Logo" style={{ height: '50px' }} />
          <div>Company Name</div>
        </div>
        <nav style={{ display: 'flex', justifyContent: 'space-between', width: '200px' }}>
            <a href="/">Home</a>
            <a href="/products">Products</a>
            <a href="/login">Login</a>
        </nav>
      </header>
    );
  };

// HomeMainSection Component
const HomeMainSection = () => {
  const [selectedReviews, setSelectedReviews] = useState([]);

  useEffect(() => {
    const randomReviews = reviews.sort(() => 0.5 - Math.random()).slice(0, 2);
    setSelectedReviews(randomReviews);
  }, []);

  return (
    <main>
      <section>
        <h1>About Us</h1>
        <p>Company's vision and mission</p>
        <button>Shop Now</button>
      </section>
      <section>
        <h1>Customer Reviews</h1>
        {selectedReviews.map((review) => (
          <div key={review.id}>
            <h2>{review.customerName}</h2>
            <p>{review.reviewContent}</p>
            <p>{'⭐'.repeat(review.stars)}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer>
      <p></p>
    </footer>
  );
};

// Homepage Component
const Homepage = () => {
  return (
    <div>
      <Header />
      <HomeMainSection />
      <Footer />
    </div>
  );
};

export default Homepage;