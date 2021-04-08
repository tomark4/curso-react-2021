import React from 'react'
import {
    Switch,
    Route,
    Redirect,
    BrowserRouter as Router
} from 'react-router-dom';
import LoginScreen from '../components/auth/LoginScreen';
import CalendarScreen from '../components/calendar/CalendarScreen';

const AppRouter = () => {
    return (
        <Router>
            <div>
                 <Switch>
                     <Route component={CalendarScreen} path="/" exact/>
                     <Route component={LoginScreen} path="/login" exact/>
                     <Redirect to="/" />
                 </Switch>
            </div>
        </Router>
    )
}

export default AppRouter
