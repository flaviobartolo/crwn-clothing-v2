import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => null,
  cartCount: 0,
  setCartCount: () => null
})


export const CartProvider = ({children}) => {

  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const counter = cartItems.reduce((accumulator, item) => accumulator + item.quantity, 0)
    setCartCount(counter)
  }, [cartItems])

  const updateCart = (cartItems, newItem) => {
    const updatedCartItems = [...cartItems]
    const itemIndex = cartItems.findIndex(cartItem => cartItem.id === newItem.id)
    
    if (itemIndex > -1) {
      updatedCartItems[itemIndex].quantity++
      return updatedCartItems
    }
    updatedCartItems.push({...newItem, quantity: 1})
    return updatedCartItems
  }

  const addItemToCart = (item) => {
    setCartItems(updateCart(cartItems, item))
  }

  const value = {isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount}

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}
