import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

const RecipeFromUrl = () => {
  const [recipe, setRecipe] = useState([])
  const {mealId} = useParams()
  useEffect(() => {
    axios
    .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then(response => {
      setRecipe(response.data)
      })
    }, [])
    try {
      const ing_iterator = Object.keys(recipe.meals[0])
        .filter(word => word.includes("strIngredient"))
      const ingredients = ing_iterator
        .map((element) => recipe.meals[0][element])
        .filter((element)=> element !== "" && element !== null)
  
      const meas_iterator = Object.keys(recipe.meals[0])
        .filter(word => word.includes("strMeasure"))
      const measures = meas_iterator
        .map((element) => recipe.meals[0][element])
        .filter((element) => element !== "" && element !== null)
  
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
          <div className="ingredients">
            <ul>         
              {ingredientArray.map(ingredient =>
                <li key={ingredient[0]}>{ingredient[1]} {ingredient[2]}</li>)}
            </ul>
          </div>
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

export default RecipeFromUrl
