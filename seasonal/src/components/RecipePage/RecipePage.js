import { useEffect, useState } from 'react';
import {Link, useLocation } from 'react-router-dom';
const api = process.env.REACT_APP_API_CALL;
const recipeApiKey = process.env.REACT_APP_SPONNACULAR_KEY

function RecipePage() {
  const location = useLocation()
  const [list, setList] = useState([]);
  const [ingredient, setIngredient] = useState(null)
  const userName = 'Antony'
  const [userRecipeId, setUserRecipeId] = useState(location.state.recipeId)
  const [recipe, setRecipe] = useState(null)

  useEffect(() => {
    async function addIngredient() {
      try{
        const res = await fetch(`${api}/list/user/add?name=${userName}`,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(ingredient)
      })} catch (e){
        console.log(e)
      };
    }
    addIngredient()
  }, [userName, ingredient]);

  function handleClick(ingredient) {
    setIngredient({item: ingredient})
    setList([...list, ingredient]);
  }

  //fetch recipe detailed info 
  useEffect(()=>{
    async function getRecipeById(){
      const response = await fetch(`https://api.spoonacular.com/recipes/${userRecipeId}/information?apiKey=${recipeApiKey}`)
      const data = await response.json()
      setRecipe(data)
    }
    getRecipeById()
  }, [userRecipeId])

  if (recipe) {
    return (
      <>      
        <div>
          <img
            src={recipe.image}
            alt={recipe.title}
          />
        </div>
        <div>
          <p>{recipe.title}</p>
        </div>
        <div>
          <div>
            <p>{recipe.readyInMinutes} minutes</p>
          </div>
          <div>
            <p>{recipe.servings} servings</p>
          </div>
        </div>
        <div>
          <div>
            <p>Ingredients</p>
          </div>
          <div>
            <ul>
              {recipe.extendedIngredients.map((ingredient, i) => {
                return (
                  <div key={ingredient.name} style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <li >{ingredient.original}</li>
                    <button onClick={() => handleClick(ingredient.original)}>+</button>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
        <div>
          <Link to="/shoppinglist"><p style={{color:'red'}}>Check your Shopping list</p></Link>
        </div>
        <div>
          <p style={{color:'blue'}}>Instructions</p>
          <ul>
            {recipe.analyzedInstructions[0].steps.map((x, i)=>{
              return<div key={i}><li >{x.step}</li></div>
            })}
          </ul>
        </div>
      </>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default RecipePage;
