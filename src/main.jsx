import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import App from './App.jsx'
import '../src/assets/css/style.css'
import { CartProvider } from 'react-use-cart'
import {Provider} from 'react-redux'
import configureStore from './tools/store/configureStore.js'
import  { setStore } from './manager.js'


const mystore = configureStore();

setStore(mystore);  
    // manager()


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <Provider store={mystore }>
            <App />
      </Provider>
    
    </CartProvider>
  
  </StrictMode>,
)
