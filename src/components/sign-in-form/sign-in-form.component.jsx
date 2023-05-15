import { useState, useContext } from "react"

import FormInput from "../form-input/form-input.component"
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component"

import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"

import './sign-in-form.styles.scss'


const defaultLoginFormFields = {
  email: '',
  password: ''
}

const SignInForm = ({ handleClick }) => {

  const [loginFormFields, setLoginFormFields] = useState(defaultLoginFormFields)
  const { email, password } = loginFormFields
  
  const resetLoginFormFields = () => {
    setLoginFormFields(defaultLoginFormFields)
  } 

  const signInWithGoogle = async () => {
    await signInWithGooglePopup()
  }

  const handleChangeLoginForm = (e) => {
    const { name, value } = e.target
    setLoginFormFields({...loginFormFields, [name]: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(email.trim(' ').length <= 5 && password.trim(' ').length <= 5) {
      alert('Email and password must be at least 5 chars long')
      return
    }
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(email, password)
      resetLoginFormFields()
    } catch (error) {

      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password')
          break
        case 'auth/user-not-found':
          alert('email not found')
          break
        default:
          console.log(error)
      }

    }
  }

  return (
    <div className="sign-up-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit} >
        <FormInput label='email' value={email} type='text' onChange={handleChangeLoginForm} name='email' />
        <FormInput label='password' value={password} type='password' onChange={handleChangeLoginForm} name='password' />
        <div className="buttons-container">
          <Button type='submit'>Sign In</Button>
          <Button buttonType={BUTTON_TYPE_CLASSES.google} type='button' onClick={signInWithGoogle}>Google Sign in</Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm