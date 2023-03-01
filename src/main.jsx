import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Category from './components/Category'
import './index.css'
import axios from 'axios'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

 
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/category",
    element: <Category />
  }
])

// TODO: Implement error pages

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
