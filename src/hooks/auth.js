import React, { useState, createContext, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [ logged, setLogged ] = useState(() => {
    let userLogged = sessionStorage.getItem('@disney-clone:user');

    if(userLogged) {
      return userLogged
    }}
  );
  const [ user, setUser ] = useState(() => {
    let userInfo = JSON.parse(sessionStorage.getItem('@disney-clone:userInfo'));

    if(userInfo) {
      return userInfo
    }}
  );

  const logIn = (name, email, photo) => {
    if(name && email){
      sessionStorage.setItem('@disney-clone:user', true);
      sessionStorage.setItem('@disney-clone:userInfo', JSON.stringify(
        {
          name: name,
          email: email,
          photo: photo
        }))

      setLogged(true);

      setUser({
        name: name,
        email: email,
        photo: photo
      });
    }
  }

  const logOut = () => {
    sessionStorage.removeItem('@disney-clone:user');
    setLogged(false);

  }

  return(
    <AuthContext.Provider
      value={{
        logged,
        user,
        logIn,
        logOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}


export const useAuth = () => {
  const contex = useContext(AuthContext);
  const { logged, user, logIn, logOut } = contex;
  return { logged, user, logIn, logOut }
} 