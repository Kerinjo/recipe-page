import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

const Recipe = () => {
  const location = useLocation()
  const mealId = location.state?.mealId
  const [recipe, setRecipe] = useState([])
  useEffect(() => {
    axios
    .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then(response => {
        setRecipe(response.data)
      })
  }, [])
  // random : www.themealdb.com/api/json/v1/1/random.php
  // rogaliki: www.themealdb.com/api/json/v1/1/lookup.php?i=53024

  // TODO: fix so that you don't need try/catch to render your page...
  try {
    const ing_iterator = Object.keys(recipe.meals[0])
      .filter(word => word.includes("strIngredient"))
    const ingredients = ing_iterator
      .map((element) => recipe.meals[0][element])
      .filter((element)=> element !== "")

    const meas_iterator = Object.keys(recipe.meals[0])
      .filter(word => word.includes("strMeasure"))
    const measures = meas_iterator
      .map((element) => recipe.meals[0][element])
      .filter((element) => element !== "")

    const ingredientArray = []
    for (let i = 0; i < ingredients.length; i++) {
      ingredientArray.push([i, ingredients[i], measures[i]])
    } 
  
    return (
      <div>
        <img width={300} src={recipe.meals[0].strMealThumb}></img><br/>
        <Link to={`/`}>Home</Link>
        <h1>{recipe.meals[0].strMeal}</h1>
        <p>{recipe.meals[0].strInstructions}</p>
        <h2>Ingredients</h2>
        <ul>         
           {ingredientArray.map(ingredient =>
             <li key={ingredient[0]}>{ingredient[1]} {ingredient[2]}</li>)}
        </ul>
      </div>
    )
  }
  catch {
    return (
      <div>
        <h1>Mock Recipe</h1>
        <p>Recipe not found</p>
        <Link to={`/`}>Home</Link>
      </div>
    )
  }
}

export default Recipe
