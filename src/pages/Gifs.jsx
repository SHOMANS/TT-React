import axios from 'axios';
import React, { useEffect, useState } from 'react';

const API_KEY = 'Ura1eoVqMbKSqasQhIbVt3YPlwrx9fh5';
// const search = 'cat';

const Gifs = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [q, setQ] = useState('');

  useEffect(() => {
    (async () => {
      const res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${q}`);
      console.log(res.data.data);
      setData(res.data.data);
    })();
  }, [q]);

  const handleChange = (e) => setSearch(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setQ(search); // sometimes you need to change state then handle the call api in useEffect

    // const res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${search}`);
    // console.log(res.data.data);
    // setData(res.data.data); the right way to call api when submit
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={search} />
        <input type='submit' />
      </form>
      {data.map((item) => (
        <img key={item.id} src={item.images.original.url} alt={item.title} width='100px' />
      ))}
    </div>
  );
};

export default Gifs;
