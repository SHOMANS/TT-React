import React, { useEffect, useState } from 'react';
import Counter from '../components/Counter';

const myCounter = [
  { id: 0, counter: 0 },
  { id: 1, counter: 0 },
  { id: 2, counter: 0 },
  { id: 3, counter: 0 },
  { id: 4, counter: 0 },
];

const Counters = () => {
  const [counters, setCounters] = useState(myCounter);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(counters.reduce((acc, cur) => acc + cur.counter, 0));
  }, [counters]);

  const onIncrement = (id) => {
    setCounters((prevState) => prevState.map((item) => (item.id === id ? { ...item, counter: item.counter + 1 } : item)));
  };

  const onDecrement = (id) => {
    setCounters((prevState) => prevState.map((item) => (item.id === id ? { ...item, counter: item.counter > 0 ? item.counter - 1 : item.counter } : item)));
  };

  return (
    <div>
      {counters.map((counter) => (
        <Counter counter={counter.counter} key={counter.id} onDecrement={() => onDecrement(counter.id)} onIncrement={() => onIncrement(counter.id)} />
      ))}
      total: {total}
    </div>
  );
};

// const obj = { id: 1, name: 4534, age: 'gdfs' };

// obj = { ...obj, name: 'sdfgsd' };

// const secObj = { ...obj }; // deep copy
// const secObj = obj; // shallow copy

// secObj.name = 'asdfajhsdkfjags';

export default Counters;
