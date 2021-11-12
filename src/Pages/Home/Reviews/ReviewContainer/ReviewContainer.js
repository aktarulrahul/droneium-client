import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import Loading from '../../../Shared/Loading/Loading';
import { Container, Box } from '@mui/material';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import bg from '../../../../images/qoute.jpg';
import ReviewBanner from '../ReviewBanner/ReviewBanner';

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
    <Box
      sx={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        my: 8,
      }}
    >
      <ReviewBanner />
      <Container>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry spacing={3}>
            {reviews.map((review) => (
              <ReviewCard key={review._id} review={review} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </Container>
    </Box>
  );
};

export default ReviewContainer;
