import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { loginWithGoogle, loginWithEmailPassword } from '../../actions/auth';
import validator from 'validator';
import {
    removeError,
    setError
} from '../../actions/ui';

const LoginScreen = () => {
    const dispatch = useDispatch();
    const { ui } = useSelector( state => state );

    const [email, setEmail] = useState("test1@jotta.com");
    const [password, setPassword] = useState("123456");

    const handleSubmit = (e) => {
        e.preventDefault();
        if( !validator.isEmail(email) ){
            dispatch( setError('email invalid') );
            return false;
        }
        if( validator.isEmpty(password) || password.length < 6){
            dispatch( setError('password invalid') );
            return false;
        }
        dispatch( removeError() );
        dispatch( loginWithEmailPassword(email, password) );
    }

    const handleLoginGoogle = () => {
        dispatch( loginWithGoogle() );
    }

    return (
        <>
            <h3 className='auth__title'>Ingresar</h3>
            <form onSubmit={handleSubmit}>
                { ui?.errorMessage &&
                    <div className="auth__alert-error">{ ui?.errorMessage }</div>
                }
                <div>
                    <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div>
                    <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div>
                    <button type="submit" className={`btn btn-primary btn-block btn-lg ${ui.loading && 'disabled'}`}
                    disabled={ui.loading}>
                        {ui.loading ? (
                            <>
                                <i class="fa fa-spinner fa-spin"></i> Validando
                            </>
                        ) : 'Ingresar'}
                    </button>
                </div>

                <div className="google-btn" onClick={handleLoginGoogle}>
                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </div>
                    <p className="btn-text">
                        <b>Sign in with google</b>
                    </p>
                </div>

            </form>
            <Link to="/auth/register" className="link">¿No tienes cuenta? Registrate</Link>
        </>
    )
}

export default LoginScreen
