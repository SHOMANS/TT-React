import React, { useEffect, useRef } from 'react';

const RefComponent = () => {
  // const ref = createRef();
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();

  useEffect(() => {
    ref1.current.focus();
  }, []);

  return (
    <div>
      <input ref={ref1} onChange={() => ref2.current.focus()} />
      <input ref={ref2} onChange={() => ref3.current.focus()} />
      <input ref={ref3} onChange={() => ref1.current.focus()} />
    </div>
  );
};

export default RefComponent;
