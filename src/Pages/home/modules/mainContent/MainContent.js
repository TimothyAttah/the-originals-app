import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../../../../Components/icons/AppIcons';
import { images } from '../../../../Components/images';
import Posts from '../../../../Components/posts/Posts';
import Story from '../../../../Components/stories/Story';
import './mainContent.css';

const MainContent = ({ handleClose }) => {
  return (
    <div className='mainContent__container'>
      <div className='mainContent__header-wrapper'>
        <div className='mainContent__header-title'>
          <Icons.ArrowLeft onClick={handleClose} />
          <h3>TimeLine</h3>
        </div>

        <div className='mainContent__header-nav-wrapper'>
          <ul className='mainContent__header-icons-wrapper'>
            <li>
              <Link to='/wallet'>
                <Icons.Wallet />
              </Link>
            </li>
            <li>
              <Link to='/cart'>
                <Icons.Cart />
              </Link>
            </li>
          </ul>
          <div className='mainContent__header-profile-wrapper'>
            <div className='profile__img-box'>
              <img src={images.User1} alt={images.User1} />
            </div>
            <Icons.ArrowDropDown />
          </div>
        </div>
      </div>
      <div className='mainContent__wrapper'>
        <div className='mainContent__left-wrapper'>
          <Posts />
        </div>
        <div className='mainContent__right-wrapper'>
          <Story />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
