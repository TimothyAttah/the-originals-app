import { POST_TYPES } from '../types';

export const listPosts = () => async (dispatch) => {
  try {
    dispatch({
      type: POST_TYPES.POST_LISTS,
    });
  } catch (error) {
    console.log(error);
  }
};
