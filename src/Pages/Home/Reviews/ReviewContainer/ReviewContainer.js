import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import Loading from '../../../Shared/Loading/Loading';

const ReviewContainer = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetch('https://aktarulrahul-droneium.herokuapp.com/reviews')
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      ReviewContainer {reviews.length}
      <ReviewCard />
    </div>
  );
};

export default ReviewContainer;
