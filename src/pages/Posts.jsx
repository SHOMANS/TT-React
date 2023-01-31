import React, { Fragment, useEffect } from 'react';
import usePosts from '../hooks/usePosts';

const Posts = () => {
  const { state, startLoading, endLoading, getAll, getOne, deleteOne, createPost, updatePost } = usePosts();

  useEffect(() => {
    startLoading();
    setTimeout(() => {
      getAll();
      endLoading();
    }, 2000);
  }, []); // GET METHOD (READ)

  // -----------------------------------------------------------------------
  // -----------------------------------------------------------------------
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   setPosts(data);
  // }, []); // read (get)

  // const createPost = (body) => {
  //   setPosts((prevState) => [...prevState, { ...body, id: Math.round(Math.random() * 100) }]);
  // }; // create (post)

  // const deletePost = (id) => {
  //   setPosts((prevState) => prevState.filter((post) => post.id !== id));
  // }; // delete (delete)
  return (
    <>
      <div>
        {state.isLoading ? 'Loading...' : ''}
        {state.posts.map((item) => (
          <Fragment key={item.id}>
            <div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              {/* <button onClick={() => deletePost(item.id)}>delete</button> */}
              <button onClick={() => deleteOne(item.id)}>delete</button>
              <button onClick={() => getOne(item.id)}>update</button>
            </div>
            <br />
          </Fragment>
        ))}
      </div>

      <button type='submit' onClick={() => createPost({ title: 'post 4', body: 'I heat the weather' })}>
        Create Post
      </button>
      <button type='submit' onClick={() => updatePost({ id: 1, title: 'post 4', body: 'Updated I heat the weather' })}>
        Update Post
      </button>

      <p>{state.post.title}</p>
    </>
  );
};

export default Posts;
