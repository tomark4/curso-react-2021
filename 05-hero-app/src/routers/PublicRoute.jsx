import { Redirect, Route } from "react-router"
import PropTypes from 'prop-types';

const PublicRoute = ({isAuth, component:Component, ...rest}) => {
    return (
        <Route
            {...rest}
            component={ props => (
                !isAuth ?
                (<Component {...props} />):
                (<Redirect to="/" />)
            )}
        />
    )
}
PublicRoute.propsType = {
    isAuth: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
export default PublicRoute
