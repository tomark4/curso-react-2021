import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import AboutScreen from "./AboutScreen";
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import NavBar from './NavBar';
import NotFoundPage from './NotFoundScreen';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <Switch>
                    <Route path="/" component={HomeScreen} exact></Route>
                    <Route path="/login" component={LoginScreen} exact></Route>
                    <Route path="/about" component={AboutScreen} exact></Route>
                    <Route component={ NotFoundPage } exact></Route>
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter
