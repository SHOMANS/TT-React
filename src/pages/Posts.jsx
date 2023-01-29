import React from 'react';
import useApi from '../hooks/useApi';

const Posts = () => {
  const { data, post } = useApi('https://jsonplaceholder.typicode.com/posts');

  // const { post } = useApi('https://jsonplaceholder.typicode.com/posts');
  return (
    <>
      <div>{data.map((item) => item.title)}</div>
      <button onClick={() => post({ title: 'new test' })}>submit</button>
    </>
  );
};

export default Posts;
