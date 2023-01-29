import React, { useContext } from 'react';
import { AuthContext } from '../context/authContect';

const LogOut = () => {
  // const context = useContext(AuthContext);
  const [isAuthorized, setIsAuthorized] = useContext(AuthContext);
  // console.log('my context =', context);

  return (
    <div>{isAuthorized ? <button onClick={() => setIsAuthorized(false)}>logout</button> : <button onClick={() => setIsAuthorized(true)}>login</button>}</div>
  );
};

export default LogOut;
