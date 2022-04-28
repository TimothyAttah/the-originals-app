import React from 'react';
import Gallery from '../gallery/Gallery';
import { Icons } from '../icons/AppIcons';
import './styles/postListsItems.css';

const PostListsItems = ({ post }) => {
  return (
    <div className='postListsItem__container'>
      <div className='top__section-container'>
        <div className='top__section-left'>
          <div className='img-box'>
            <img src={post.user.photo} alt={post.user.photo} />
          </div>
          <div className='name-wrapper'>
            <h4>{post.user.name}</h4>
            <p>{post.createdAt}</p>
          </div>
        </div>

        <button className='menu'>
          <Icons.VerticalMenu />
        </button>
      </div>

      <div className='content__section-container'>
        <p>{post.content}</p>
      </div>

      <>
        <Gallery photos={post.photos} />
      </>

      <div className='post__options-section-container'>
        <button className='options-button'>
          <Icons.Chat />
        </button>
        <button className='options-button'>
          <Icons.Link />
        </button>
        <button className='options-button'>
          <Icons.HeartFill />
        </button>
      </div>

      <div className='bottom__section-container'>
        <div className='bottom__section-left-container'>
          {post.likes.map((like) => (
            <div key={like.photo} className='post__like-img-box'>
              <img src={like.photo} alt={like.photo} />
            </div>
          ))}
          <div className='like-info'>
            <h4>Toby,edward</h4>
            <p>and 23 more liked this</p>
          </div>
        </div>
        <div className='bottom__section-right-container'>
          <div>
            <Icons.HeartLine />
            <span>50</span>
          </div>
          <div>
            <Icons.Link />
            <span>50</span>
          </div>
          <div>
            <Icons.Chat />
            <span>4</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostListsItems;
