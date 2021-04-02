import { useState } from 'react';
import validator from 'validator';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { registerWithEmailPassword } from '../../actions/auth'

const RegisterScreen = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const {errorMessage} = useSelector( ({ui}) => ui)

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();

        if(formValid()){
            dispatch( registerWithEmailPassword( email, password, name ) )
        }
    }

    const formValid = () => {
        if( validator.isEmpty(name) ){
            dispatch( setError('name required') )
            return false;
        }

        if( !validator.isEmail(email) ){
            dispatch( setError('email invalid') )
            return false;
        }

        if( password !== passwordConfirm ){
            dispatch( setError('password not match') )
            return false;
        }

        if( password.length < 6 ){
            dispatch( setError('password too short') )
            return false;
        }

        dispatch( removeError() );
        return true;
    }

    return (
        <>
            <h3 className='auth__title'>Registrar</h3>
            <form onSubmit={handleSubmit}>
                { errorMessage && (
                    <div className="auth__alert-error">
                        {errorMessage}
                    </div>
                )}

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
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>
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
                    <input
                    type="password"
                    placeholder="Password confirm"
                    name="password_confirm"
                    className="auth__input"
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}/>
                </div>

                <div>
                    <button type="submit" className="btn btn-primary btn-block btn-lg">Registrar</button>
                </div>
            </form>
            <Link to="/auth/login" className="link">¿Ya tienes cuenta? Ingresar</Link>
        </>
    )
}

export default RegisterScreen
