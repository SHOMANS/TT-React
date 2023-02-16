import React, { useEffect, useState } from 'react';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { createPost, deletePost, getAllData, updatePost } from '../redux/posts';

// initials
const initialValues = {
  title: '',
  body: '',
};

const PostsPage = () => {
  // states
  const [values, setValues] = useState(initialValues);
  const [updatingValues, setUpdatingValues] = useState(null);

  // third party custom hooks
  const { posts, isLoading, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  // common function
  const backToInitial = () => {
    setValues(initialValues);
    setUpdatingValues(null);
  };

  // events functions
  const handleDeleteTodo = (id) => {
    dispatch(deletePost(id));
    backToInitial();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (updatingValues?.id) {
      dispatch(updatePost({ ...updatingValues, ...values }));
    } else {
      dispatch(createPost(values));
    }

    backToInitial();
  };

  // effects
  useEffect(() => {
    dispatch(getAllData());
  }, [dispatch]);

  useEffect(() => {
    setValues({ title: updatingValues?.title || '', body: updatingValues?.body || '' });
  }, [updatingValues]);

  return (
    <div>
      {isLoading ? <h3>Loading...</h3> : ''}
      {error}
      <form onSubmit={handleSubmit}>
        <input type='text' name='title' onChange={(e) => setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))} value={values?.title} />
        <input type='text' name='body' onChange={(e) => setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))} value={values?.body} />
        <button type='submit'>submit</button>
      </form>
      <div style={{ display: 'flex', flexDirection: 'column-reverse' }}>
        {posts.length ? (
          posts.map((todo) => (
            <div key={todo.id}>
              <h3>{todo.title}</h3>
              <p>{todo.body}</p>
              <button onClick={() => handleDeleteTodo(todo.id)}>delete</button>
              <button onClick={() => setUpdatingValues(todo)}>Edit</button>
            </div>
          ))
        ) : (
          <h3>no todos to show</h3>
        )}
      </div>
    </div>
  );
};

export default PostsPage;
