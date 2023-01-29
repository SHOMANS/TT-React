import { useState, useEffect } from 'react';
import axios from 'axios';

const useApi = (url) => {
  const [data, setData] = useState([]);
  const [postedData, setPostedData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(url);
        console.log(res.data);
        setData(res.data);
      } catch (e) {
        console.log(e.message);
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [url]);

  const post = async (body) => {
    try {
      setIsLoading(true);
      const res = await axios.post(url, body);
      console.log(res.data);
      setPostedData(res.data);
    } catch (e) {
      console.log(e.message);
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  const func = () => {};

  return { data, isLoading, error, postedData, func, post };
};

export default useApi;
