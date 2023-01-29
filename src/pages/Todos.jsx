import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useApi from '../hooks/useApi';
// import { callAPI } from '../utils/callApi';

const Todos = () => {
  const { data, isLoading, error } = useApi('https://jsonplaceholder.typicode.com/todos');

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
