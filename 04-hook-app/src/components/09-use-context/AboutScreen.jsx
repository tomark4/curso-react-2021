import { useContext } from "react"
import {UserContext} from './UserContextProvider'

const AboutScreen = () => {
    const {user} = useContext(UserContext);
    return (
        <>
            <h1>About</h1>
            <pre>
                {JSON.stringify(user)}
            </pre>
        </>
    )
}

export default AboutScreen
