import { useState } from "react"

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"

import FormInput from "../form-input/form-input.component"
import Button from "../button/button.component"

import './sign-up-form.styles.scss'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields)
  const {displayName, email, password, confirmPassword } = formFields

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (displayName.trim(' ').length < 5 && (password !== confirmPassword)) {
      alert('please fill the sign up form correctly')
      return 
    }

    try {  
      const { user } = await createAuthUserWithEmailAndPassword(email, password)
      await createUserDocumentFromAuth(user, { displayName })
    
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Email already exists')
      }
      console.log('user creation error: ', error)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormFields({...formFields, [name]: value})
    console.log(formFields)
  } 

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput 
          type="text" 
          label='Display Name' 
          required 
          onChange={handleChange} 
          name='displayName' 
          value={displayName} 
        />
        
        <FormInput 
          type="text" 
          label='Email' 
          required 
          onChange={handleChange} 
          name='email' 
          value={email} 
        />
        <FormInput 
          type="password" 
          label='Password' 
          required 
          onChange={handleChange} 
          name='password' 
          value={password} 
        />
        <FormInput 
          type="password" 
          label='Confirm Password' 
          required 
          onChange={handleChange} 
          name='confirmPassword' 
          value={confirmPassword} 
        />
        
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  )
}

export default SignUpForm