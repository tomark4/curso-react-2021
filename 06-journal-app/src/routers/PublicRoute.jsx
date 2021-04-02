import React from 'react'
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({isAuth, component:Component, path, rest}) => {
    return (
        <Route
        path={path}
        {...rest}
        component={ (props) => isAuth ? (
            <Redirect to="/" />
            ) : (
            <Component {...props} />
        )}/>

    )
}

export default PublicRoute
