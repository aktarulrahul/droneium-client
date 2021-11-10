import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const Booking = () => {
  const { register, handleSubmit, reset, control } = useForm();
  const { droneId } = useParams();
  const [drone, setDrone] = useState({});
  const { name, img, price, description } = drone;
  useEffect(() => {
    fetch(`http://localhost:5000/drones/${droneId}`)
      .then((res) => res.json())
      .then((data) => setDrone(data));
  }, [droneId]);

  const onSubmit = (data) => {
    const purchaseInfo = {
      ...data,
      status: 'pending',
    };
    axios.post('', purchaseInfo).then((res) => {
      if (res.data.insertedId) {
        reset();
      }
    });
  };
  return <h2>{drone.name}</h2>;
};

export default Booking;
