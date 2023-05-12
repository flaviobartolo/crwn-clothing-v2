import './checkout-item.styles.scss'

const CheckoutItem = ({ imageUrl, name, quantity, price }) => {
  return (
    <div className='checkout-item-container'>
      <img src={imageUrl} alt={name} />
      <span className="item-description">{name}</span>
      <span className="item-arrow"> - </span>
      <span className="item-quantity">{quantity}</span>
      <span className="item-arrow"> + </span>
      <span className="item-price"> {price} </span>
      <span className="item-remote"> X </span>
    </div>
  )
}

export default CheckoutItem