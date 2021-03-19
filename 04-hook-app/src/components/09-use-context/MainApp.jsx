import AppRouter from './AppRouter';
import UserContextProvider from './UserContextProvider';

const MainApp = () => {

    return (
        <>
            <UserContextProvider>
                <AppRouter />
            </UserContextProvider>
        </>
    )
}

export default MainApp
