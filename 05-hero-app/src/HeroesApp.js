import AuthContextProvider from "./auth/AuthContextProvider"
import AppRouter from "./routers/AppRouter"

const HeroesApp = () => {
  return (
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  )
}

export default HeroesApp
