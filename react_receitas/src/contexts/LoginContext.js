import React, { useState, useEffect } from "react";
import {login} from '../services/User'
import { useNavigate } from 'react-router-dom';

export const LoginContext = React.createContext();

const LoginContextProvider = (props) => {

  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    
  }, []);

  const signIn = async (email, password) => {
    const {token, user} = await login(email, password)

    console.log(user)

    navigate("/")
  }

  return (
    <LoginContext.Provider value={{user, signIn}}>
      {props.children}
    </LoginContext.Provider>
  );
}

export default LoginContextProvider;