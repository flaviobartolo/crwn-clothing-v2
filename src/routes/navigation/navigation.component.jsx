import { useContext } from "react"
import { Outlet, NavLink } from "react-router-dom"

import { UserContext } from "../../contexts/user.context"
import {signOutUser} from '../../utils/firebase/firebase.utils'

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

import './navigation.styles.scss'

const Navigation = () => {

  const { currentUser } = useContext(UserContext)

  const signOutHandler = async () => {
    try {
      await signOutUser()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="navigation">
        <NavLink className='logo-container' to='/'>
          <div className="logo"><CrwnLogo /></div>
        </NavLink>
        <div className="nav-links-container">
          <NavLink className='nav-link' to='/shop'>SHOP</NavLink>
          {currentUser ? (
            <span className='nav-link' to='/signout' onClick={signOutHandler}>SIGN OUT</span>
          ) : (
            <NavLink className='nav-link' to='/auth'>SIGN IN</NavLink>
          )}
          
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation