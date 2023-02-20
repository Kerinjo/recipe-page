import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import axios from 'axios'

axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
  .then(response => {
    const categories = response.data
    console.log(categories)
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
