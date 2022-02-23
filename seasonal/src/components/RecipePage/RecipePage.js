import React from 'react';

function RecipePage({ userRecipe }) {
  
  if (userRecipe.length) {
    return (
      <>
        <div>
          <img src={userRecipe[0].recipe.images.REGULAR.url} alt="userRecipe[0].recipe.label" />
        </div>
        <div>
          <p>{userRecipe[0].recipe.label}</p>
        </div>
        <div>
          <div>
            <p><a href={userRecipe[0].recipe.url}>link to external recipe</a></p>
          </div>
          <div>
            <p>{userRecipe[0].recipe.totalTime} minutes</p>
          </div>
          <div>
            <p>{Math.round(userRecipe[0].recipe.totalNutrients.ENERC_KCAL.quantity)} kcal</p>
          </div>
        </div>
        <div>
          <div>
            <p>Ingredients</p>
          </div>
          <div>
            <ul>
              {userRecipe[0].recipe.ingredientLines.map((item, i)=>{
              return(
                <div key={i} style={{display: 'flex', justifyContent: 'space-between'}}>
                  <li >{item}</li>
                  <button>+</button>
                </div>
                )
              })}
            </ul>
          </div>
        </div>          
      </>
    );
  } else {
    return (
      <div>
        {' '}
        <p>Go Back and select a recipe</p>
      </div>
    );
  }
}

export default RecipePage;
