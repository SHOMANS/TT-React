import React from 'react';
import Container from './Container';

function HigherOrderLayout(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: ['1', '2', '3'],
      };
    }

    render() {
      console.log('state from HOC', this.state.data);
      return (
        <Container>
          <WrappedComponent data={this.state.data} {...this.props} />;
        </Container>
      );
    }
  };
}

export default HigherOrderLayout;

// import React, { useState } from 'react';

// const HigherOrderLayout = (WrappedComponent) => {
//   return (props) => {
//     const [isVisible, setIsVisible] = useState(false);

//     const toggleVisibility = () => {
//       setIsVisible(!isVisible);
//     };

//     return (
//       <WrappedComponent
//         {...props}
//         isVisible={isVisible}
//         toggleVisibility={toggleVisibility}
//       />
//     );
//   };
// };

// export default HigherOrderLayout;
