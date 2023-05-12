import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { CartContext } from '../../contexts/cart.context'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'

import './cart-dropdown.styles.scss'


const CartDropdown = () => {
  const navigate = useNavigate()
  const { cartItems, setIsCartOpen } = useContext(CartContext)

  const redirectToCheckout = () => {
    setIsCartOpen(false)
    navigate('/checkout')
  }

  return (
    <div className='cart-dropdown-container' >
      <div className='cart-items'>
        {
          cartItems.map(item => <CartItem key={item.id} {...item} />)
        }
      </div>
      <Button onClick={redirectToCheckout}>Go to Checkout</Button>
    </div>
  )
}

export default CartDropdown