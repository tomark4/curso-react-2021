import { useContext } from "react"
import {UserContext} from "./UserContextProvider"

const LoginScreen = () => {

    const {setUser} = useContext(UserContext);

    return (
        <>
            <h1>Login</h1>
            <button className="btn btn-primary"
            onClick={() => setUser({id: 1, name:'jose',email:'jotta@jotta.com'})}>Ingresar</button>

            <button className="btn btn-danger"
            onClick={() => setUser({})}>
                Logout
            </button>
        </>
    )
}

export default LoginScreen
