import { createContext, useState, useEffect } from "react";

import { onAuthStateChangedListener, createUserDocumentFromAuth } from '../utils/firebase/firebase.utils'


// actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
})

export const UserProvider = ({ children }) => {

  // basically this allows any of the child components to access currentUser and setCurrentUser
  const [currentUser, setCurrentUser] = useState(null)
  const value = { currentUser, setCurrentUser }

  useEffect(() =>{
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user)
        setCurrentUser(user)
      } else {
        setCurrentUser(null)
      }
    })
    return unsubscribe
  }, [])


  return <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
}