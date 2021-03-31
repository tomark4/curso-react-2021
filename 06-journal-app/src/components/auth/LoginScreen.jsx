import {Link} from 'react-router-dom';

const LoginScreen = () => {
    return (
        <>
            <h3 className='auth__title'>Ingresar</h3>
            <form>
                <div>
                    <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"/>
                </div>

                <div>
                    <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"/>
                </div>

                <div>
                    <button type="submit" className="btn btn-primary btn-block btn-lg">Ingresar</button>
                </div>

                <div className="google-btn">
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
