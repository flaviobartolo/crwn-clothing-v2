import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'

import './checkout-item.styles.scss'


const CheckoutItem = ({ item }) => {
  const { name, id, quantity, price, imageUrl } = item
  const { addItemToCart, subtractItemToCart, removeItemFromCart } = useContext(CartContext)
  console.log(quantity)

  return (
    <div className='checkout-item-container'>
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className='arrow' onClick={() => subtractItemToCart(item)}>
          &#10094;          
        </div>
        <span className="value">
          {quantity}
        </span>
        <div className='arrow' onClick={() => addItemToCart(item)}>
          &#10095;          
        </div>
      </span>
      <span className="price"> {price} </span>
      <span className="remove-button" onClick={() => removeItemFromCart(id)}> &#10005; </span>
    </div>
  )
}

export default CheckoutItem