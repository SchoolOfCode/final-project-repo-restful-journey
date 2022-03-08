import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import css from "./RecipePage.module.css";

const api = process.env.REACT_APP_API_CALL;
const recipeApiKey = process.env.REACT_APP_SPONNACULAR_KEY;

function RecipePage({ user, cssSeason }) {
  const location = useLocation();
  const [list, setList] = useState([]);

  const [ingredient, setIngredient] = useState(null);
  const userName = "Antony";
  const [userRecipeId, setUserRecipeId] = useState(
    location.state ? location.state.recipeId : null
  );
  const [recipe, setRecipe] = useState(null);
  let userId;

  if (user) {
    userId = user.sub.split("|")[1];
    console.log("id recipe", userId);
  }

  useEffect(() => {
    async function addIngredient() {
      try {
        const res = await fetch(`${api}/users/add`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: userId, item: ingredient.item }),
        });
      } catch (e) {
        console.log(e);
      }
    }
    addIngredient();
  }, [userId, ingredient]);

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
            <p className={css[`duration${cssSeason}`]}>{recipe.readyInMinutes} minutes</p>
          </div>
          <div>
            <p className={css[`servings${cssSeason}`]}>{recipe.servings} servings</p>
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
                  <div className={css[`listContainer${cssSeason}`]} key={ingredient.name}>
                    <li>{ingredient.original}</li>
                    <button
                      className={css[`addBtn${cssSeason}`]}
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
        <div className={css[`shoppingListLink${cssSeason}`]}>
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
        <p className={css[`noRecipe${cssSeason}`]}>No recipe selected.</p>
        <p className={css[`linkToHome${cssSeason}`]}>
          Check the <Link to="/home">home</Link> page for some inspiration!
        </p>
      </div>
    );
  }
}

export default RecipePage;
