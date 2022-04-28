import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostListsItems from './PostListsItems';
import { listPosts } from '../../redux/actions/postActions';
import './styles/postLists.css';

const PostLists = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(listPosts());
  }, [dispatch]);

  return (
    <div>
      {posts.map((post) => (
        <PostListsItems key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostLists;
