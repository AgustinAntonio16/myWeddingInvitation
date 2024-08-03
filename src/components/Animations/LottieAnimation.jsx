import React from 'react';
import Lottie from 'react-lottie';

const LottieAnimation = ({ animationData, width = 300, height = 300 }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div style={{ width: width, height: height }}>
      <Lottie options={defaultOptions} height={height} width={width} />
    </div>
  );
};

export default LottieAnimation;