import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect, Navigate } from 'react-router-dom';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {

    // const isLoggedIn = useSelector(state => state.user).isLoggedIn
    const isLoggedIn = true

    return (
        <Route {...rest} render={props => (
            isLoggedIn && restricted ?
                <Navigate to="/home" />
                : <Component {...props} />
        )} />
    );
};

export default PublicRoute;