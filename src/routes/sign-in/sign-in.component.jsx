import { useEffect } from "react"
import { getRedirectResult } from "firebase/auth"

import { auth, createUserDocumentFromAuth, signInWithGooglePopup, signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils"

const SignIn = () => {

  useEffect( async () => {
    const response = await getRedirectResult(auth)
    if(response) {
      const userDocRef = await createUserDocumentFromAuth(response.user)
    }
  }, [])

  const logGoogleUserPopup = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
    //console.log(response)
  }

  return (
    <>
      <div>SignIn</div>
      <button onClick={logGoogleUserPopup}>Sign-in with Google Popup</button>
      <button onClick={signInWithGoogleRedirect}>Sign-in with Google Redirect</button>
    </>
  )
}

export default SignIn