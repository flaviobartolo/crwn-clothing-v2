import { useContext } from "react"
import { Outlet, NavLink } from "react-router-dom"

import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"

import { UserContext } from "../../contexts/user.context"
import { CartContext } from "../../contexts/cart.context"

import {signOutUser} from '../../utils/firebase/firebase.utils'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import './navigation.styles.scss'


const Navigation = () => {

  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)

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
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  )
}

export default Navigation