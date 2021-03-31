import {Link} from 'react-router-dom';

const RegisterScreen = () => {
    return (
        <>
            <h3 className='auth__title'>Registrar</h3>
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
                    type="text"
                    placeholder="Name"
                    name="name"
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
                    <input
                    type="password"
                    placeholder="Password confirm"
                    name="password_confirm"
                    className="auth__input"/>
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
