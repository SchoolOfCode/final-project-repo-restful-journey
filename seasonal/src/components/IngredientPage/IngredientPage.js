import React from "react";

function IngredientPage({ ingredient }) {
  console.log(ingredient);

  return (
    <>
      <h1>IngredientPage</h1>
      <h2>Ingredient: {ingredient}</h2>
    </>
  );
}

export default IngredientPage;
