import React from "react";
import { useFetch } from "../hooks/useFetch.js";
import { seasonQuotes, getSeason } from "../../libs/seasonalData.js";
import { useNavigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
import IngredientPage from "../IngredientPage/IngredientPage.js";

const season = getSeason()
const randomNumber = Math.floor(Math.random() * seasonQuotes[season].length)
console.log(randomNumber)

//test api used for testing useFetch custom hook. Will be replaced with ingredients back end.
// const api = process.env.REACT_APP_API_CALL;
const api = "https://nourish-seasonal.herokuapp.com";

function Homepage() {
  const [type, setType] = useState()
  let navigate = useNavigate()
  function routeChange() {
    let path = "/ingredients"
    navigate(path)
  }
  const [data] = useFetch(`${api}/ingredients`);
  console.log(data);
console.log(getSeason())

function handleClick(e) {
  setType(e.target.alt)
  console.log(type)
  routeChange()
}

if (data) {
    return (
      <>
        <h1>Hello again!</h1>
        <Routes><Route path="ingredients" element={<IngredientPage ingredient={type}/>}/></Routes>
        <h2>{seasonQuotes[season][randomNumber]}</h2>
        {data.payload.map((item, index) => {
          return (
            <div key={index}>
              <h1>{item.name}</h1>
                <img src={item.imgurl} alt={item.name} onClick={(e) => handleClick(e)}></img>
            </div>
          );
        })}
      </>
    );
  } else {
    return <h1>Hello again!</h1>;
  }
}



export default Homepage;

