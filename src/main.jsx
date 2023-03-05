import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Category from './components/Category'
import Placeholder from './components/Placeholder'
import RandomRecipe from './components/RandomRecipe'
import Recipe from './components/Recipe'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

 
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/category",
    element: <Placeholder />
  },
  {
    path: "/category/:categoryName",
    element: <Category />
  },
  {
    path: "/meal/:mealId",
    element: <Recipe />
  },
  {
    path: "/random-recipe",
    element: <RandomRecipe />
  }
])

// TODO: Implement error pages

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
