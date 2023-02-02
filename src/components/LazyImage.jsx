import React, { Suspense } from 'react';

const LazyImage = ({ item }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <img key={item.id} src={item?.images?.original?.url} alt={item?.title} width='100px' loading='lazy' />
    </Suspense>
  );
};

export default LazyImage;
