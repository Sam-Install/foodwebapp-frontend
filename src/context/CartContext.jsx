import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (dish) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === dish.id)
      if (exists) return prev.map((item) => item.id === dish.id ? { ...item, count: item.count + 1 } : item)
      return [...prev, { ...dish, count: 1 }]
    })
  }

  const decrease = (id) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === id)
      if (exists.count === 1) return prev.filter((item) => item.id !== id)
      return prev.map((item) => item.id === id ? { ...item, count: item.count - 1 } : item)
    })
  }

  const remove = (id) => setCart((prev) => prev.filter((item) => item.id !== id))

  const clearCart = () => setCart([])

  const total = cart.reduce((sum, item) => sum + item.price * item.count, 0)

  return (
    <CartContext.Provider value={{ cart, addToCart, decrease, remove, clearCart, total }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)