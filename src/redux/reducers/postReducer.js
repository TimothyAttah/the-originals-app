import { v4 as uuid } from 'uuid';
import { POST_TYPES } from '../types';
import { images } from '../../Components/images';

const initialState = {
  posts: [
    {
      id: uuid(),
      content: 'Post One',
      createdAt: 'May 3rd 2022, 02:12 pm',
      photos: [images.PostImage3],
      likes: [
        {
          name: 'Dan Walker',
          photo: images.User6,
        },
        {
          name: 'Dan Walker',
          photo: images.User7,
        },
        {
          name: 'Dan Walker',
          photo: images.User1,
        },
        {
          name: 'Dan Walker',
          photo: images.User11,
        },
      ],
      user: {
        name: 'Dan Walker',
        photo: images.User1,
      },
    },

    {
      id: uuid(),
      content:
        'Wonderful day with @edward and @ramond221 at #NFTreveal event in lagos. So Happy to be there.',
      createdAt: 'May 30 2022, 02:12 pm',
      photos: [images.PostImage4, images.PostImage9],
      likes: [
        {
          name: 'Dan Walker',
          photo: images.User15,
        },
        {
          name: 'Dan Walker',
          photo: images.User1,
        },
        {
          name: 'Dan Walker',
          photo: images.User4,
        },
      ],
      user: {
        name: 'Dan Walker',
        photo: images.User1,
      },
    },

    {
      id: uuid(),
      content: 'Post Three',
      createdAt: 'May 30 2022, 02:12 pm',
      photos: [images.PostImage2],
      likes: [
        {
          name: 'Dan Walker',
          photo: images.User9,
        },
        {
          name: 'Dan Walker',
          photo: images.User10,
        },
        {
          name: 'Dan Walker',
          photo: images.User13,
        },
        {
          name: 'Dan Walker',
          photo: images.User4,
        },
      ],
      user: {
        name: 'Dan Walker',
        photo: images.User1,
      },
    },

    {
      id: uuid(),
      content: 'Post Four',
      createdAt: 'May 30 2022, 02:12 pm',
      photos: [
        images.PostImage2,
        images.PostImage7,
        images.PostImage1,
        images.PostImage8,
        images.PostImage5,
      ],
      likes: [
        {
          name: 'Dan Walker',
          photo: images.User13,
        },
        {
          name: 'Dan Walker',
          photo: images.User12,
        },
        {
          name: 'Dan Walker',
          photo: images.User14,
        },
        {
          name: 'Dan Walker',
          photo: images.User2,
        },
      ],
      user: {
        name: 'Dan Walker',
        photo: images.User1,
      },
    },
  ],
};

export const posts = (state = initialState, action) => {
  switch (action.type) {
    case POST_TYPES.POST_LISTS:
      return {
        ...state,
      };

    default:
      return state;
  }
};
