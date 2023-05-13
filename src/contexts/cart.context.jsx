import { createContext, useState, useEffect } from "react";

import { getIndexById } from '../utils/helpers'

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => null,
  cartCount: 0,
  setCartCount: () => null,
  removeItemFromCart: () => null
})


export const CartProvider = ({children}) => {

  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const counter = cartItems.reduce((accumulator, item) => accumulator + item.quantity, 0)
    setCartCount(counter)
  }, [cartItems])

  const updateCart = (cartItems, newItem, toAdd) => {
    const updatedCartItems = [...cartItems]
    const itemIndex = getIndexById(cartItems, 'id', newItem.id)

    if (itemIndex > -1) {
      if (toAdd) {
        updatedCartItems[itemIndex].quantity++
      } else {
        updatedCartItems[itemIndex].quantity > 0 && updatedCartItems[itemIndex].quantity--
      }
      return updatedCartItems
    }
    updatedCartItems.push({...newItem, quantity: 1})
    return updatedCartItems
  }

  const addItemToCart = (item) => {
    setCartItems(updateCart(cartItems, item, true))
  }

  const subtractItemToCart = (item) => {
    setCartItems(updateCart(cartItems, item, false))
  }

  const removeItemFromCart = (id) => {
    const itemIndex = getIndexById(cartItems, 'id', id)
    if (itemIndex > - 1) {
      const updatedCartItems = [...cartItems]
      updatedCartItems.splice(itemIndex, 1)
      setCartItems(updatedCartItems)
    }
    return cartItems
  }

  const value = {isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount, subtractItemToCart, removeItemFromCart}

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}
