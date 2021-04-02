import React from 'react'
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({isAuth, component:Component, path, rest}) => {
    return (
        <Route
        path={path}
        {...rest}
        component={ (props) => isAuth ? (
            <Component {...props} />
        ) : (
            <Redirect to="/auth/login"/>
        )}/>

    )
}

export default PrivateRoute
