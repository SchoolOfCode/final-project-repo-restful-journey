import React from "react";
import { useFetch } from "../hooks/useFetch.js";
import { seasonQuotes, getSeason } from "../../libs/seasonalData.js";
import { useNavigate, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import IngredientPage from "../IngredientPage/IngredientPage.js";

const season = getSeason();
const randomNumber = Math.floor(Math.random() * seasonQuotes[season].length);
console.log(randomNumber);

//test api used for testing useFetch custom hook. Will be replaced with ingredients back end.
const api = process.env.REACT_APP_API_CALL;

function filterSelection(ingredient, array) {
  const filtered = array.filter((item) => {
    return item.name === ingredient
  })
console.log(filtered);
return filtered;
} 

function filterVegetables(array, boolean) {
  const vegetables = array.filter((item) => {
    return item.isfruit === boolean
  })
console.log(vegetables);
return vegetables;
} 

function Homepage() {
  const [ingredient, setIngredient] = useState(null);
  const [filtered, setFiltered] = useState([]);
const [vegetables, setVegetables] = useState([]);
const [fruit, setFruit] = useState([]);

  let navigate = useNavigate();
  function routeChange() {
    let path = "ingredients";
    navigate(path);
  }
  const [data] = useFetch(`${api}/ingredients`);
  console.log(data);
  console.log(getSeason());

  function handleClick(e) {
    setIngredient(e.target.alt);
    console.log(ingredient);
    console.log(filtered)
    routeChange();
  
  }

  useEffect(() => {
   if(data){setFiltered(filterSelection(ingredient, data.payload))
  filterVegetables (data.payload)};
  }, [ingredient])

  useEffect(() => {
    if(data){ 
    setVegetables(
   filterVegetables (data.payload, false))
   setFruit(
   filterVegetables (data.payload, true));
   console.log (vegetables)
   console.log (fruit)}
   }, [data])




  if (data && !ingredient) {
    return (
      <>
        <h1>Hello again!</h1>
        <h2>{seasonQuotes[season][randomNumber]}</h2>
        <h1> vegetables</h1>
        {vegetables.map((item, index) => {
          return (
            <div key={index}>
              <h1>{item.name}</h1>
              <img
                src={item.imgurl}
                alt={item.name}
                onClick={(e) => handleClick(e)}
              ></img>
            </div>
          );
        })}
        <h1> fruit</h1>
      
         {fruit.map((item, index) => {
          return (
            <div key={index}>
              <h1>{item.name}</h1>
              <img
                src={item.imgurl}
                alt={item.name}
                onClick={(e) => handleClick(e)}
              ></img>
            </div>
          );
        })}
      </>
    );
  } else if (!data) {
    return <h1>Hello again!</h1>;
  } else if (ingredient) {
    return (
      <Routes>
        <Route
          path="/ingredients"
          element={<IngredientPage ingredient={ingredient} filtered={filtered}/>}
        />
      </Routes>
    );
  }
}

export default Homepage;
