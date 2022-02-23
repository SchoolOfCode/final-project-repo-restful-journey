import {useState, useEffect} from "react";
import SearchPage from "../SearchPage/SearchPage";

const apiId = process.env.REACT_APP_EDAMAM_ID;
const apiKey = process.env.REACT_APP_EDAMAM_KEY;

function IngredientPage({ ingredient, filtered, setIngredient }) {
  const [recipes, setRecipes] = useState([]); //20 recipes

  useEffect(() => {
    async function fetchRecipe() {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${ingredient}&app_id=${apiId}&app_key=${apiKey}`
      );
      const { hits } = await response.json();
      setRecipes(hits);
    }
    fetchRecipe();
  }, [ingredient, apiId, apiKey]);
  
  console.log(recipes)
  console.log(ingredient);

  return (
    <>
    <div>
    <h1>IngredientPage</h1>
      <h2>Ingredient: {ingredient}</h2>
      {filtered.map((item) => {
        return (
          <div>
            <h1>{item.name}</h1>
            <h2>{item.nutrition}</h2>
            <h2>{item.fact}</h2>
          </div>
        )
      })}
      </div>
      <div >
      {recipes.slice(0, 4).map((item, index) => {
        return (
          <div key={index} >
            <div >
              <img
                src={item.recipe.images.REGULAR.url}
                alt={item.label}
                // onClick={(e) => handleClick(e)}
              ></img>
              <p>{item.recipe.label}</p>
            </div>
          </div>
        );
      })}
      </div>
      <h1>Search page</h1>
      <SearchPage recipes={recipes} setRecipes={setRecipes} ingredient={ingredient} setIngredient={setIngredient}/>
    </>
  );
}

export default IngredientPage;
