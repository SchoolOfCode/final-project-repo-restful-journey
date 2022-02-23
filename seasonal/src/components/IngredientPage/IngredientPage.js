import React from "react";

function IngredientPage({ ingredient, filtered }) {

  console.log(ingredient);

  return (
    <>
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
    </>
  );
}

export default IngredientPage;
