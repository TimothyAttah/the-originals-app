import React from 'react';
import { Icons } from '../icons/AppIcons';
import { categories, followUsers, hotTopics } from '../dummyData';
import './styles/story.css';

const Story = () => {
  return (
    <div className='story__container'>
      <div className='search__box'>
        <Icons.Search />
        <input type='text' placeholder='Search The Original' />
      </div>
      <div className='story__users-container'>
        <div className='story__header-wrapper'>
          <h4>Hot Topics</h4>
        </div>
        <ul>
          {hotTopics.map((hotTopic, index) => (
            <li className='stories__users-lists-item'>
              <div className='stories__users-lists-item-info'>
                <p>{hotTopic.topics}</p>
                <small>{hotTopic.posts}</small>
              </div>
              <Icons.HorizontalMenu />
            </li>
          ))}
        </ul>
      </div>

      <div className='follow__container'>
        <div className='story__header-wrapper'>
          <h4>Who to Follow</h4>
        </div>
        <ul>
          {followUsers.map((user, index) => (
            <li className='stories__users-lists-item'>
              <div className='stories__users-lists-item-info'>
                <p>{user.name}</p>
                <small>{user.email}</small>
              </div>
              <button>Follow</button>
            </li>
          ))}
        </ul>
      </div>

      <div className='categories__container'>
        <div className='categories__header-wrapper'>
          <h4>More Categories</h4>
        </div>
        <div className='categories__subheader-wrapper'>
          <p>See more posts from selected categories on your timeline.</p>
          <Icons.HorizontalMenu />
        </div>

        <ul className='categories__list-item-container'>
          {categories.map((category, index) => (
            <li className='categories__list-item'>
              <p>{category.type}</p>
              <div className='categories__icon-box'>
                <Icons.Add className='add-icon' />
                <Icons.Close />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Story;
