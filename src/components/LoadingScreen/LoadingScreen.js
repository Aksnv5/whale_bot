import React from 'react';
import './LoadingScreen.css';
import Lottie from 'lottie-react';
import animationData from './Coin-animation.json';
import WhalePhoto from './Whale.svg'

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className='loading-lottie'>
      <Lottie animationData={animationData} loop={true} style={{ width: 300, height: 300 }}/>
      </div>
      {/* <div className="spinner"></div> */}
      <img src={WhalePhoto}></img>
      <div className="loading-text">LOADING
        <div className='dots-container'>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
/* Rectangle 26 */


