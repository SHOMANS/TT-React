import React, { useEffect, useState } from 'react';

const Posts = () => {
  const [data, setData] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('Mounting and updating');
  }); // will execute on mounting and updating

  useEffect(() => {
    console.log('Mounting');
  }, []); // same as componentDidMount()

  useEffect(() => {
    console.log('updating data');
  }, [data]); // will execute only if data is updating

  useEffect(() => {
    console.log('updating counter');
  }, [counter]); // will execute only if counter is updating

  useEffect(() => () => console.log('unmounting'), []); // instead of componentWillUnmount()

  return (
    <>
      <div>
        {data ? 'success' : 'failed'}
        <button onClick={() => setData((prevState) => !prevState)}>click</button>
      </div>
      <div>
        {counter}
        <button onClick={() => setCounter((prevState) => prevState + 1)}>click</button>
      </div>
    </>
  );
};

export default Posts;
