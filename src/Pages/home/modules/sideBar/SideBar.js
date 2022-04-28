import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../../../../Components/images';
import { Icons } from '../../../../Components/icons/AppIcons';
import './sideBar.css';

const SideBar = ({ close }) => {
  return (
    <div className={close ? 'sidebar__container close' : 'sidebar__container'}>
      <Link to='/' className='sidebar__logo'>
        <h1>Logo</h1>
      </Link>
      <div className='sidebar-profile__data-wrapper'>
        <div className='img__box'>
          <img src={images.User9} alt={images.User9} />
        </div>
        <h2>Jenna Davis</h2>
        <p>Influencer</p>
      </div>

      <>
        <ul className='sidebar__lists'>
          <li className='timeline'>
            <Icons.Home /> <span>Home</span>
          </li>
          <li>
            <Icons.User /> <span>Artists</span>
          </li>
          <li>
            <Icons.Mail /> <span>Message</span>
          </li>
          <li>
            <Icons.Market /> <span>Market Place</span>
          </li>
          <li>
            <Icons.Notification /> <span>Notification</span>
          </li>
          <li className='setting'>
            <Icons.Setting /> <span>Settings</span>
          </li>
          <li>
            <Icons.Logout /> <span>Log out</span>
          </li>
        </ul>
      </>
    </div>
  );
};

export default SideBar;
