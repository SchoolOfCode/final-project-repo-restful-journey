import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./IngredientPage.css";
const recipeApiKey = process.env.REACT_APP_SPONNACULAR_KEY


function IngredientPage({ingredient, filtered}) {
  const [recipes, setRecipes] = useState([]); 

useEffect(()=>{
  async function getRecipe(){
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${recipeApiKey}&query=${ingredient}&titleMatch=${ingredient}&number=10`)
    const data = await response.json()
    setRecipes(data.results);
  }
  getRecipe()
}, [ingredient]);

  
    return (
      <>
        <div>
          <h2 className="ingredient-title">{ingredient}</h2>
          {filtered.map((item) => {
            return (
              <div className="ingredient-container" key={item.id}>
                <div>
                  <img
                    className="main-image"
                    src={item.imgurl}
                    alt={item.name}
                  />
                </div>
                <div className="ingredient-details">
                  <h2>{item.nutrition}</h2>
                  <h2>{item.fact}</h2>
                </div>
              </div>
            );
          })}
        </div>
        <div className="image-container">
          {recipes.slice(0, 4).map((item, index) => {
            return (
              <div className="recipe-container" key={item.id}>
              <Link to='/recipes' state={{recipeId: item.id}}> 
                <figure className="recipe-container2">
                  <img
                    src={item.image}
                    alt={item.id}
                  ></img>
                  <figcaption className="caption">
                    {item.title}
                  </figcaption>
                </figure>
                </Link>
              </div>
            );
          })}
        </div>
        <Link to='/search' state={{recipes, ingredient}}><h3>Discover more {ingredient} recipes here!</h3></Link>
      </>
    );
} 


export default IngredientPage;
