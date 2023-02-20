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

// www.themealdb.com/api/json/v1/1/filter.php?c=Seafood

  const getCategory = (categoryName) => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
      .then(response => {
        console.log(response.data)
      })
  }

  return (
    <div className="App">
      <h1>categories</h1>
      {categories.map(category =>
        <div key={category.idCategory}>
          <a onClick={() => getCategory(category.strCategory)}>
            {category.strCategory}
          </a>
        </div>
      )}
    </div>
  )
}

export default App
