import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CartProvider } from './context/cart-context'
import { FavProvider } from './context/favorite-context'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
<FavProvider>
    <CartProvider>
    <App />
    </CartProvider>
    </FavProvider>
   
  </React.StrictMode>
)
