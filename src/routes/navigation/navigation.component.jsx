import { Outlet, NavLink } from "react-router-dom"

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

import './navigation.styles.scss'

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <NavLink className='logo-container' to='/'>
          <div className="logo"><CrwnLogo /></div>
        </NavLink>
        <div className="nav-links-container">
          <NavLink className='nav-link' to='/shop'>SHOP</NavLink>
          <NavLink className='nav-link' to='/sign-in'>SIGN IN</NavLink>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation