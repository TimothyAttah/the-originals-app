import React, { useState } from 'react';
import MainContent from './modules/mainContent/MainContent';
import SideBar from './modules/sideBar/SideBar';
import './styles/home.css';

const Home = () => {
  const [close, setClose] = useState(true);

  const handleClose = () => {
    setClose(!close);
  };
  return (
    <div className='home__main-container'>
      <div className='home__main-wrapper'>
        {close && <SideBar close={close} />}
        <MainContent handleClose={handleClose} />
      </div>
    </div>
  );
};

export default Home;
