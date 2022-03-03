import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import css from "./RecipePage.module.css";

const api = process.env.REACT_APP_API_CALL;
const recipeApiKey = process.env.REACT_APP_SPONNACULAR_KEY;

function RecipePage() {
  const location = useLocation();
  const [list, setList] = useState([]);

  const [ingredient, setIngredient] = useState(null);
  const userName = "Antony";
  const [userRecipeId, setUserRecipeId] = useState(
    location.state ? location.state.recipeId : null
  );
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    async function addIngredient() {
      try {
        const res = await fetch(`${api}/list/user/add?name=${userName}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(ingredient),
        });
      } catch (e) {
        console.log(e);
      }
    }
    addIngredient();
  }, [userName, ingredient]);

  function handleClick(ingredient) {
    setIngredient({ item: ingredient });
    setList([...list, ingredient]);
  }

  //fetch recipe detailed info
  useEffect(() => {
    async function getRecipeById() {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${userRecipeId}/information?apiKey=${recipeApiKey}`
      );
      const data = await response.json();
      setRecipe(data);
    }
    getRecipeById();
  }, [userRecipeId]);

  if (recipe) {
    return (
      <>
        <div>
          <img className={css.img} src={recipe.image} alt={recipe.title} />
        </div>
        <div>
          <h1 className={css.title}>{recipe.title}</h1>
        </div>
        <div className={css.recipeInfo}>
          <div>
            <p className={css.duration}>{recipe.readyInMinutes} minutes</p>
          </div>
          <div>
            <p className={css.servings}>{recipe.servings} servings</p>
          </div>
        </div>
        <div>
          <div>
            <p className={css.ingredients}>Ingredients</p>
          </div>
          <div>
            <ul>
              {recipe.extendedIngredients.map((ingredient, i) => {
                return (
                  <div className={css.listContainer} key={ingredient.name}>
                    <li>{ingredient.original}</li>
                    <button
                      className={css.addBtn}
                      onClick={() => handleClick(ingredient.original)}
                    >
                      <i class="fa-solid fa-plus"></i>
                    </button>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
        <div className={css.shoppingListLink}>
          <Link to="/shoppinglist">
            <p className={css.link}>Go to your Shopping list</p>
            <i class="fa-solid fa-cart-shopping"></i>
          </Link>
        </div>
        <div>
          <p className={css.instructions}>Instructions</p>
          <ul>
            {recipe.analyzedInstructions[0].steps.map((x, i) => {
              return (
                <div key={i}>
                  <li className={css.recipeSteps}>{x.step}</li>
                </div>
              );
            })}
          </ul>
        </div>
      </>
    );
  } else {
    return (
      <div>
        <p className={css.noRecipe}>No recipe selected.</p>
        <p className={css.linkToHome}>
          Check the <Link to="/home">home</Link> page for some inspiration!
        </p>
      </div>
    );
  }
}

export default RecipePage;
