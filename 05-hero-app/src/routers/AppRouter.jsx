import { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import { AuthContext } from '../auth/AuthContextProvider';

import LoginScreen from '../components/screens/LoginScreen';
import DashboardRoutes from './DashboardRoutes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {

    const { user:{logged} } = useContext(AuthContext);

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute exact
                    isAuth={logged}
                    path='/login'
                    component={LoginScreen} />

                    <PrivateRoute
                    path='/'
                    component={DashboardRoutes}
                    isAuth={logged}
                    />
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter
