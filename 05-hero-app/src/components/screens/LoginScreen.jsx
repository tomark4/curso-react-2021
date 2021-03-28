import { useContext } from "react";
import {AuthContext} from '../../auth/AuthContextProvider';
import {types} from '../../types/types';

const LoginScreen = ({history}) => {
    const {dispatch} = useContext(AuthContext);

    const lastPath = localStorage.getItem('lastPath') || "/";

    const handleLogin = () => {
        dispatch({
            type: types.login,
            payload: {
                name: 'jose'
            }
        });
        history.replace(lastPath)
    }

    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-6 mx-auto">
                        <div className="card">
                            <div className="card-body">
                                <h4>Login</h4>
                                <hr/>
                                <button className="btn btn-success btn-block"
                                onClick={handleLogin}>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginScreen
