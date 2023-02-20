import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'


const App = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => {
        setCategories(response.data.categories)
      }) 
  }, [])

  return (
    <div className="App">
      <h1>categories</h1>
      <ul>
        {categories.map(category =>
          <li key={category.idCategory}>
            {category.strCategory}
          </li>  
        )}
      </ul>
    </div>
  )
}

export default App
