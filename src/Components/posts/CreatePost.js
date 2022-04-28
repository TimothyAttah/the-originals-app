import React from 'react';
import { Icons } from '../icons/AppIcons';
import { images } from '../images';
import './styles/createPost.css';

const CreatePost = () => {
  return (
    <div className='createPost__container'>
      <ul className='createPost__list-items'>
        <li className='edit-list'>
          <Icons.Edit />
          <span>Publish</span>
        </li>
      </ul>

      <div className='createPost__textarea-container'>
        <div className='createPost__textarea-wrapper'>
          <div className='img-box'>
            <img src={images.User1} alt={images.User1} />
          </div>
          <textarea name='' id='' placeholder='Write something about you...' />
        </div>
        <div className='createPost__textarea-media-box'>
          <button className='createPost__textarea-media-info'>
            <Icons.Camera />
            <span>Media</span>
          </button>
          <button className='createPost__textarea-media-info'>
            <Icons.Video />
            <span>Video</span>
          </button>

          <button className='createPost__textarea-media-info'>
            <Icons.HorizontalMenu />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
