import React, { useState, useEffect, useContext } from "react";
import {login} from '../services/User'
import Api from '../services/Api'

export const LoginContext = React.createContext();

const LoginContextProvider = (props) => {

  const [user, setUser] = useState();

  useEffect(() => {
    loadUserAndToken()
  }, []);

  const signIn = async (email, password) => {
    const {token, user} = await login(email, password)

    localStorage.setItem("users_db", JSON.stringify(user))
    localStorage.setItem("token_db", JSON.stringify(token))

    setUser(user)

  }

  const loadUserAndToken = () => {
    const userStorage = JSON.parse(localStorage.getItem("users_db"))
    const tokenStorage = JSON.parse(localStorage.getItem("token_db"))

    if(tokenStorage && userStorage) {
      Api.defaults.headers.authorization = `Bearer ${tokenStorage}`

      console.log(tokenStorage)

      setUser(userStorage)
    }
  }

  const signOut = () => {
    setUser(null)
    localStorage.removeItem("users_db")
    localStorage.removeItem("token_db")
   
  }


  return (
    <LoginContext.Provider value={{user, signIn, signOut}}>
      {props.children}
    </LoginContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(LoginContext)

  return context 
}

export default LoginContextProvider;