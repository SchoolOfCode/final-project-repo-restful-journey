import { useEffect, useState } from 'react';
import {Link } from 'react-router-dom';
const api = process.env.REACT_APP_API_CALL;

function RecipePage({ userRecipe }) {
  const [list, setList] = useState([]);
  const [ingredient, setIngredient] = useState(null)
  const userName = 'Antony'
  
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
  }, [api, userName, ingredient]);

  function handleClick(ingredient) {
    setIngredient({item: ingredient})
    setList([...list, ingredient]);
  }

  if (userRecipe.length) {
    return (
      <>
        <div>
          <img
            src={userRecipe[0].recipe.images.REGULAR.url}
            alt="userRecipe[0].recipe.label"
          />
        </div>
        <div>
          <p>{userRecipe[0].recipe.label}</p>
        </div>
        <div>
          <div>
            <p>
              <a href={userRecipe[0].recipe.url}>link to external recipe</a>
            </p>
          </div>
          <div>
            <p>{userRecipe[0].recipe.totalTime} minutes</p>
          </div>
          <div>
            <p>
              {Math.round(
                userRecipe[0].recipe.totalNutrients.ENERC_KCAL.quantity
              )}{' '}
              kcal
            </p>
          </div>
        </div>
        <div>
          <div>
            <p>Ingredients</p>
          </div>
          <div>
            <ul>
              {userRecipe[0].recipe.ingredientLines.map((ingredient, i) => {
                return (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <li>{ingredient}</li>
                    <button onClick={() => handleClick(ingredient)}>+</button>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
        <Link to="/shoppinglist"><p>Check your Shopping list</p></Link>
      </>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default RecipePage;
