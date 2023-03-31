import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import store from './store/index'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import 'react-toastify/dist/ReactToastify.css';
import './css/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <ChakraProvider>
        <App />
        <ToastContainer 
          hideProgressBar={false}
          closeButton={false}
          newestOnTop
        />
      </ChakraProvider>
    </BrowserRouter>
    
  </Provider>
)