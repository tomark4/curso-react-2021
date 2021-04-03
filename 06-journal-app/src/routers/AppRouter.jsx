import { useEffect, useState } from 'react'
import {
    BrowserRouter as Router ,
    Switch,
    Redirect
} from 'react-router-dom';
import AuthRouter from './AuthRouter';
import JournalScreen from '../components/journal/JournalScreen';
import { firebase } from '../firebase';
import { useDispatch } from 'react-redux';
import { types } from '../types/types';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { startLoadingNotes } from '../actions/notes';

const AppRouter = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged( async (user) => {

            if( user?.uid ){

                dispatch( {
                    type: types.login,
                    payload: {uid: user.uid, name: user.displayName}
                });

                setIsAuth(true);
                dispatch(startLoadingNotes(user.uid))

            } else {
                setIsAuth(false);
            }

            setLoading(false);
        });
    },[dispatch]);

    if(loading){
        return (
            <div style={{display:'flex',justifyContent:'center',alignItems:'middle'}}
            className="mt-5"><i className="fa fa-spinner fa-spin"></i> Cargando...</div>
        );
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                    isAuth={isAuth}
                    path="/auth"
                    component={AuthRouter}/>

                    <PrivateRoute
                    path="/"
                    component={JournalScreen}
                    isAuth={isAuth}
                    exact/>

                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter
