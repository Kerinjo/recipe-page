import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Category from './components/Category'
import Placeholder from './components/Placeholder'
import RandomRecipe from './components/RandomRecipe'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RecipeFromCategory from './components/RecipeFromCategory'
import RecipeFromUrl from './components/RecipeFromUrl'
 
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
    path: "/category/:categoryName/meal/:mealId",
    element: <RecipeFromCategory />
  },
  {
    path: "/meal/:mealId",
    element: <RecipeFromUrl />
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
