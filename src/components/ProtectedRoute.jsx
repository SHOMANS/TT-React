import React, { Component } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Header from './Header';

export default class ProtectedRoute extends Component {
  render() {
    return (
      <div>
        {this.props.isAuthorized ? (
          <>
            <Header myPage='home' logout={this.props.logout} />

            <Outlet />
          </>
        ) : (
          <Navigate to='/login' />
        )}
      </div>
    );
  }
}
