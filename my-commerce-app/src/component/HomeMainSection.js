import React, { useEffect, useState } from "react";
import reviews from "../data/reviews.js";

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
            <p>{"⭐".repeat(review.stars)}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default HomeMainSection;
