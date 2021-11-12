import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import {
  TextField,
  Typography,
  Box,
  Alert,
  AlertTitle,
  MenuItem,
  Select,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
  const [success, setSuccess] = useState(false);
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const reviewData = { ...data, img: user.photoURL };
    setSuccess(false);
    axios
      .post('https://aktarulrahul-droneium.herokuapp.com/reviews', reviewData)
      .then((res) => {
        if (res.data.insertedId) {
          reset();
          setSuccess(true);
        }
      });
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h2" sx={{ my: 2 }}>
        Add Review
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
            type="email"
            defaultValue={user.email}
            multiline
            {...register('email', {
              required: true,
            })}
            placeholder="Email"
          />

          <br />

          <TextField
            sx={{ my: 2 }}
            fullWidth
            label="Review"
            multiline
            rows={4}
            {...register('review', { required: true })}
            placeholder="Enter Your Review"
          />
          <br />
          <Select
            sx={{ my: 2 }}
            label="Rating"
            fullWidth
            multiline
            defaultValue="5"
            {...register('rating', { required: true })}
          >
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="4">4</MenuItem>
            <MenuItem value="5">5</MenuItem>
          </Select>

          <br />
          <TextField
            sx={{ display: 'flex', justifyContent: 'center' }}
            type="submit"
            value="Add Review"
          />
        </Box>
      </form>

      {success && (
        <Alert sx={{ my: 2 }} severity="success">
          <AlertTitle>Success</AlertTitle>
          Thanks for your feedback{' '}
          <NavLink to="/explore">Explore All Drones!</NavLink>
        </Alert>
      )}
    </Box>
  );
};

export default Review;
