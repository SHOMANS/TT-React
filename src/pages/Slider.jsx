import React, { useState } from 'react';

const images = [
  'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg',
  'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg',
  'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
];

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => index > 0 && setIndex((prevState) => prevState - 1);
  const handleNext = () => index < images.length - 1 && setIndex((prevState) => prevState + 1);

  return (
    <div>
      {null.map((item) => (
        <></>
      ))}
      <button onClick={handlePrev}>prev</button>
      <button onClick={handleNext}>next</button>
      <img src={images[index]} alt='' />
    </div>
  );
};

export default Slider;
