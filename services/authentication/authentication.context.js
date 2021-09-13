import React , { useState , createContext } from 'react';
import * as firebase from 'firebase';
import { loginRequest } from './authentication.context';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading , setIsLoading ] = useState(false);
  const [user , setUser ] = useState(null);
  const [error , setError ] = useState([]);

  const onLogin = (email , password) => {
    setIsLoading(true);
    loginRequest(email,password).then((u) => {
      setUser(u);
      setIsLoading(false);
    }).catch((err)=>{
      setIsLoading(false);
      setError(err.toString());
      console.log(err);
    })
  };

  const onRegister = (email , password , repeatedPassword) => {

    if(password !== repeatedPassword){
      setError("Error : Passwords do not match");
      return;
    }

    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then((u) => {
      setUser(u);
      setIsLoading(false);
    }).catch((err)=>{
      setIsLoading(false);
      setError(err.toString());
      console.log(err);
    });
  };

  return(
    <AuthenticationContext.Provider
    value={{
      isAuthenticated : !!user,
      isLoading,
      error,
      onLogin,
      onRegister,
    }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}
