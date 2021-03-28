import { createContext, useReducer, useEffect } from 'react'
import authReducer from './authReducer'

export const AuthContext = createContext()

const init = () => {
  return JSON.parse(localStorage.getItem('user')) || {logged: false};
}

const AuthContextProvider = ({children}) => {
  const [user, dispatch] = useReducer(authReducer, {}, init)

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  },[user])

  return (
    <AuthContext.Provider value={{user, dispatch}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;
