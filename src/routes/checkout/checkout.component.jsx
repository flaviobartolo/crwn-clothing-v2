import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import './checkout.styles.scss'


const Checkout = () => {
  const { cartItems } = useContext(CartContext)
  console.log(cartItems)
  return (
    <div className='checkout-container'>
      {cartItems.map(item => (
        <CheckoutItem key={item.id} {...item} />
      ))}
    </div>
  )
}

export default Checkout