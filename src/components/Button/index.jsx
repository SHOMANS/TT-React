import React from 'react';
import './style.css';

// const Button = ({ title = 'no title', isActive }) => {
//   // const { title = 'no title' } = props;
//   console.log(isActive);

//   return <button className={isActive ? 'active' : ''}>{title}</button>;
// };

class Button extends React.Component {
  render() {
    console.log(this.props);
    const { isActive, children = 'no title' } = this.props;
    return <button className={`${isActive ? 'active' : ''} button`}>{children}</button>;
  }
}

export default Button;
