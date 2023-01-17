import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import { callAPI } from '../utils/callApi';

const Todos = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    // callAPI();

    (async () => {
      try {
        setIsLoading(true);
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
        // console.log(res.data);
        setData(res.data);
        setIsLoading(false);
      } catch (e) {
        console.log(e.message);
        setError(e.message);
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <div>
      {error}
      {isLoading
        ? 'loading...'
        : data.map((item, index) => (
            <div key={item.id}>
              {index + 1} title: {item.title}
            </div>
          ))}
    </div>
  );
};

export default Todos;
