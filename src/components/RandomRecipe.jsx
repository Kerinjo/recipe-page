import axios from "axios"
import { useEffect, useState } from "react"

const Recipe = () => {
  const [recipe, setRecipe] = useState([])
  useEffect(() => {
    axios
    .get('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(response => {
        setRecipe(response.data)
      })
  }, [])
  // random : www.themealdb.com/api/json/v1/1/random.php
  // rogaliki: www.themealdb.com/api/json/v1/1/lookup.php?i=53024

  try {
    const iterator = Object.keys(recipe.meals[0]).filter(word => word.includes("strIngredient"))
    const ingredients = iterator
      .map((element) => recipe.meals[0][element])
      .filter((element)=>element !== "")
    return (
      <div>
        <img width={300} src={recipe.meals[0].strMealThumb}></img>
        <h1>{recipe.meals[0].strMeal}</h1>
        <p>{recipe.meals[0].strInstructions}</p>
        <h2>Ingredients</h2>
        <ul>
          {ingredients.map(ingredient => <li key={ingredients.indexOf(ingredient)}>{ingredient}</li>)}
        </ul>
      </div>
    )
  }
  catch {
    return (
      <div>
        <h1>Mock Recipe</h1>
        <p>Recipe not found</p>
      </div>
    )
  }
}

export default Recipe
