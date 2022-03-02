import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./IngredientPage.css";
const recipeApiKey = process.env.REACT_APP_SPONNACULAR_KEY;

function IngredientPage() {
  const localStorageIngredient =
    JSON.parse(localStorage.getItem("ingredient")) || {};
  console.log(localStorageIngredient.name);
  const [recipes, setRecipes] = useState([]);
  const location = useLocation();
  const [ingredient] = useState(
    location.state ? location.state.ingredient : localStorageIngredient
  );
  let ingredientName = ingredient.name;
  console.log(ingredient);

  useEffect(() => {
    if (ingredient) {
      localStorage.setItem("ingredient", JSON.stringify(ingredient));
    }
  }, [ingredient]);

  useEffect(() => {
    async function getRecipe() {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${recipeApiKey}&query=${ingredient.name}&titleMatch=${ingredient.name}&number=10`
      );
      const data = await response.json();
      setRecipes(data.results);
    }
    getRecipe();
  }, [ingredient]);

  console.log("ingredient page", ingredient);

  return (
    <>
      <div>
        <h2 className="ingredient-title">{ingredient.name}</h2>

        <div className="ingredient-container">
          <div>
            <img
              className="main-image"
              src={ingredient.imgurl}
              alt={ingredient.name}
            />
          </div>
          <div className="ingredient-details">
            <h2>{ingredient.nutrition}</h2>
            <h2>{ingredient.fact}</h2>
          </div>
        </div>
      </div>
      <div className="image-container">
        {recipes && recipes.slice(0, 4).map((item, index) => {
          return (
            <div className="recipe-container" key={item.id}>
              <Link to="/recipes" state={{ recipeId: item.id }}>
                <figure className="recipe-container2">
                  <img src={item.image} alt={item.id}></img>
                  <figcaption className="caption">{item.title}</figcaption>
                </figure>
              </Link>
            </div>
          );
        })}
      </div>
      <Link to="/search" state={{ recipes, ingredientName }}>
        <h3>Discover more {ingredient.name} recipes here!</h3>
      </Link>
    </>
  );
}

export default IngredientPage;
