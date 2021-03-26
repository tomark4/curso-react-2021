import Navbar from '../components/ui/Navbar';
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import MarvelScreen from '../components/screens/MarvelScreen';
import HeroeScreen from '../components/screens/HeroeScreen';
import DcScreen from '../components/screens/DcScreen';
import SearchScreen from '../components/screens/SearchScreen';

const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-3">
                <Switch>
                    <Route exact path='/marvel' component={MarvelScreen} />
                    <Route exact path='/heroe/:id' component={HeroeScreen} />
                    <Route exact path='/dc' component={DcScreen} />
                    <Route exact path='/search' component={SearchScreen} />
                    <Redirect to="/marvel" />

                </Switch>
            </div>
        </>
    )
}

export default DashboardRoutes
