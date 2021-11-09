import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import DroneCard from '../DroneCard/DroneCard';
import Fade from 'react-reveal/Fade';

const DroneContainer = ({ home }) => {
  const [drones, setDrones] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let displayDrones = [...drones];
  if (home) {
    displayDrones = drones.slice(0, 6);
  }
  useEffect(() => {
    setIsLoading(true);
    fetch('http://localhost:5000/drones')
      .then((res) => res.json())
      .then((data) => {
        setDrones(data);
        setIsLoading(false);
      });
  }, []);
  return (
    <Container sx={{ my: 3 }}>
      <Typography variant="h3" sx={{ textAlign: 'center', my: 2 }}>
        Our Drones
      </Typography>
      <Fade left>
        <Grid container spacing={2}>
          {displayDrones.map((drone) => (
            <DroneCard key={drone._id} drone={drone} isLoading={isLoading} />
          ))}
        </Grid>
      </Fade>
    </Container>
  );
};

export default DroneContainer;
