import { useContext } from "react"
import {UserContext} from './UserContextProvider'

const HomeScreen = () => {
    const {user} = useContext(UserContext);

    return (
        <div>
            <h1>Home</h1>
            <pre>
                {JSON.stringify(user)}
            </pre>
        </div>
    )
}

export default HomeScreen
