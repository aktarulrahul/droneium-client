import React from 'react';
import Lottie from 'react-lottie';
import animation from '../../../animations/login.json';

const LoginAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div>
      <Lottie options={defaultOptions} height={'auto'} width={500} />
    </div>
  );
};

export default LoginAnimation;
