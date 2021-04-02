import { useEffect } from 'react'
import {
    BrowserRouter as Router ,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import AuthRouter from './AuthRouter';
import JournalScreen from '../components/journal/JournalScreen';
import { firebase } from '../firebase';
import { useDispatch } from 'react-redux';
import { types } from '../types/types';

const AppRouter = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        firebase.auth().onAuthStateChanged( user => {
            if( user?.uid ){
                dispatch( {
                    type: types.login,
                    payload: {uid: user.uid, name: user.displayName}
                })
            }
        });
    },[]);

    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/auth" component={AuthRouter}/>
                    <Route path="/" component={JournalScreen} exact/>
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter
