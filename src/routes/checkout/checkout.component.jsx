import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import './checkout.styles.scss'


const Checkout = () => {
  const { cartItems } = useContext(CartContext)
  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className="header-block">
          <div className="span">Product</div>
        </div>
        <div className="header-block">
          <div className="span">Description</div>
        </div>
        <div className="header-block">
          <div className="span">Quantity</div>
        </div>
        <div className="header-block">
          <div className="span">Price</div>
        </div>
        <div className="header-block">
          <div className="span">Remove</div>
        </div>
      </div>
      {cartItems.map((item, index) => (
          <CheckoutItem key={index} item={item} />
        ))}
      <span className='total'>Total: 0</span>
    </div>
  )
}

export default Checkout