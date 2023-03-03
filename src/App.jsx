import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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

  const getCategoryInfo = (category) => {
    console.log(category.strCategory)
    console.log(category)
  }

  return (
    <div className="App">
      <h1>categories</h1>
      <ul>
        {categories.map(category =>
          <li key={category.idCategory}>
            {/* <a onClick={() => getCategoryInfo(category)}>
            {category.strCategory}
            </a><br/> */}
            <Link 
              to={`category/${category.strCategory}`}
              state={{categoryName: category.strCategory}}>
                {category.strCategory}
            </Link>
          </li>
        )}
      </ul>
      <Link to={`random-recipe`}>Random recipe</Link>
    </div>
  )
}

export default App
