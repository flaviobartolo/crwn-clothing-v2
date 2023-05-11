/* 
import { useEffect } from "react"
import { getRedirectResult } from "firebase/auth"
import { auth, createUserDocumentFromAuth, signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils" */

import SignUpForm from "../../components/sign-up-form/sign-up-form.component"
import SignInForm from "../../components/sign-in-form/sign-in-form.component"

import './authentication.styles.scss'

const Authentication = () => {
/* this was created for the signInWithGoogleRedirect firebase method, check section 6 - lesson 97 of this course.
  useEffect( async () => {
    const response = await getRedirectResult(auth)
    if(response) {
      const userDocRef = await createUserDocumentFromAuth(response.user)
    }
  }, []) */

  return (
    <div className="authentication-container">
      {/* <button onClick={signInWithGoogleRedirect}>Sign-in with Google Redirect</button> */}
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default Authentication