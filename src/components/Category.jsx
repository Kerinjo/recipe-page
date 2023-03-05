import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"

const Category = () => {
  const location = useLocation()
  const categoryName = location.state?.categoryName
  const [categoryData, setCategoryData] = useState([])

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
      .then(response => {
        setCategoryData(response.data)
        // console.log(categoryData)
      })
  }, [])

  return (
    <div>
      <Link to={`/`}>Home</Link>
      <h1>{categoryName}</h1>
      <ul>
          {categoryData.meals && categoryData.meals.map(meal =>
            <li key={meal.idMeal}>
              <Link 
                to={`/meal/${meal.idMeal}`}
                state={{mealId: meal.idMeal}}>
                {meal.strMeal}
              </Link>
            </li>
          )}
      </ul>
    </div>
  )
}

export default Category
