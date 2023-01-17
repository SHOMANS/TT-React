import axios from 'axios';

export const callAPI = async () => {
  const data = await axios.get('https://jsonplaceholder.typicode.com/todos');
  console.log(data);
};
