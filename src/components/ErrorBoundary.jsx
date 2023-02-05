import { Component } from 'react';
import FallBackErrorPage from './FallBackErrorPage';

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // componentDidCatch(error, errorInfo) {
  //   console.log(error, errorInfo);
  // }

  render() {
    if (this.state.hasError) {
      return <FallBackErrorPage />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
