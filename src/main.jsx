import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import axios from 'axios'

axios.get('http://www.themealdb.com/api/json/v1/1/random.php')
  .then(response => {
    const meals = response.data
    console.log(meals)
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
