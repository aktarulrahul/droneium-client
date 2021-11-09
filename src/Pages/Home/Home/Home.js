import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import DroneContainer from '../../Shared/Drones/DroneContainer/DroneContainer';
import ReviewContainer from '../Reviews/ReviewContainer/ReviewContainer';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <DroneContainer />
      <ReviewContainer />
      <Footer />
    </div>
  );
};

export default Home;
