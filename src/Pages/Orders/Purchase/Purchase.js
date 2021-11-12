import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import {
  Container,
  Grid,
  Box,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import Loading from '../../Shared/Loading/Loading';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';

const Booking = () => {
  const { register, handleSubmit, reset } = useForm();
  const history = useHistory();
  const { user } = useAuth();
  const { droneId } = useParams();
  const [drone, setDrone] = useState({});
  const [droneLoading, setDroneLoading] = useState(true);
  const { name, img, price, description } = drone;
  useEffect(() => {
    setDroneLoading(true);
    fetch(`https://aktarulrahul-droneium.herokuapp.com/drones/${droneId}`)
      .then((res) => res.json())
      .then((data) => {
        setDrone(data);
        setDroneLoading(false);
      });
  }, [droneId]);

  const onSubmit = (data) => {
    const purchaseInfo = {
      ...data,
      status: 'pending',
    };
    axios
      .post('https://aktarulrahul-droneium.herokuapp.com/orders', purchaseInfo)
      .then((res) => {
        if (res.data.insertedId) {
          reset();
          history.push('/dashboard/pay');
        }
      });
  };
  if (droneLoading) {
    return <Loading />;
  }
  return (
    <>
      <Navigation />
      <Container>
        <Grid container spacing={2}>
          {/* Shipping Information */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography variant="h2" sx={{ my: 2 }}>
                Shipping Address
              </Typography>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Box
                  sx={{
                    width: 500,
                    maxWidth: '100%',
                  }}
                >
                  <TextField
                    sx={{ my: 2 }}
                    fullWidth
                    label="Name"
                    defaultValue={user.displayName}
                    multiline
                    {...register('name', {
                      required: true,
                    })}
                    placeholder="Name"
                  />

                  <br />
                  <TextField
                    sx={{ my: 2 }}
                    fullWidth
                    label="Email"
                    defaultValue={user.email}
                    {...register('email', {
                      required: true,
                    })}
                    placeholder="Email"
                  />

                  <br />

                  <TextField
                    sx={{ my: 2 }}
                    fullWidth
                    label="Phone Number"
                    type="text"
                    {...register('phone', { required: true })}
                    placeholder="Phone"
                  />

                  <br />
                  <TextField
                    sx={{ my: 2 }}
                    fullWidth
                    label="Product Name"
                    defaultValue={name}
                    type="text"
                    {...register('DroneName', { required: true })}
                    placeholder="Drone Name"
                  />

                  <br />
                  <TextField
                    sx={{ my: 2 }}
                    fullWidth
                    label="Drone Price"
                    defaultValue={price}
                    type="number"
                    {...register('price', { required: true })}
                    placeholder="Price"
                  />

                  <br />
                  <TextField
                    sx={{ my: 2 }}
                    fullWidth
                    label="Address"
                    multiline
                    rows={4}
                    {...register('address', { required: true })}
                    placeholder="Address"
                  />
                  <br />
                  <Button
                    sx={{ display: 'flex', justifyContent: 'center' }}
                    type="submit"
                    value="Order Confirm"
                    variant="contained"
                    fullWidth
                  >
                    Order Confirm
                  </Button>
                </Box>
              </form>
            </Box>
          </Grid>
          {/* Drone Information */}
          <Grid item xs={12} md={6}>
            {name}
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Booking;
