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
      {/* <span className="quantity" onClick={() => subtractItemToCart(item)}> - </span> */}
      <span className="quantity">{quantity}</span>
      {/* <span className="item-arrow" onClick={() => addItemToCart(item)}> + </span> */}
      <span className="price"> {price} </span>
      <span className="remove-button" onClick={() => removeItemFromCart(id)}> &#10005; </span>
    </div>
  )
}

export default CheckoutItem