import { createContext, useContext, useState } from 'react'

const StoreContext = createContext()

export const StoreProvider = ({ children }) => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [cartItems, setCartItems] = useState({})

  const increase = (id) => setCartItems((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }))
  const decrease = (id) => setCartItems((prev) => {
    const current = prev[id] || 0
    if (current <= 1) {
      const updated = { ...prev }
      delete updated[id]
      return updated
    }
    return { ...prev, [id]: current - 1 }
  })

  const cartCount = Object.values(cartItems).reduce((a, b) => a + b, 0)
  const cartTotal = cartCount

  return (
    <StoreContext.Provider value={{
      activeCategory, setActiveCategory,
      cartItems, increase, decrease,
      cartCount, cartTotal,
    }}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = () => useContext(StoreContext)