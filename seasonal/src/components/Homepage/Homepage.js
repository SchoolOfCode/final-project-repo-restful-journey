import React from "react";
import { Container } from "@chakra-ui/react";
import { useFetch } from "../hooks/useFetch.js";
import { seasonQuotes, getSeason } from "../../libs/seasonalData.js";
import { useNavigate, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import IngredientPage from "../IngredientPage/IngredientPage.js";
import "./Homepage.css";
import Slider from "../Slider/slider.js";

const season = getSeason();
const randomNumber = Math.floor(Math.random() * seasonQuotes[season].length);
console.log(randomNumber);

//test api used for testing useFetch custom hook. Will be replaced with ingredients back end.
const api = process.env.REACT_APP_API_CALL;

function filterSelection(ingredient, array) {
  const filtered = array.filter((item) => {
    return item.name === ingredient;
  });
  console.log(filtered);
  return filtered;
}

function filterVegetables(array, boolean) {
  const vegetables = array.filter((item) => {
    return item.isfruit === boolean;
  });
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
    console.log(filtered);
    routeChange();
  }

  useEffect(() => {
    if (data) {
      setFiltered(filterSelection(ingredient, data.payload));
      filterVegetables(data.payload);
    }
  }, [ingredient]);

  useEffect(() => {
    if (data) {
      setVegetables(filterVegetables(data.payload, false));
      setFruit(filterVegetables(data.payload, true));
      console.log(vegetables);
      console.log(fruit);
    }
  }, [data]);

  if (data && !ingredient) {
    return (
      <>
        <Container maxW="container.xl">
          <div className="greeting">
            <h1>Hello username! 👋🏼</h1>
            <br />
            <h2>{seasonQuotes[season][randomNumber]}</h2>
          </div>
        </Container>
        <Container maxW="container.xl">
          <h1 className="type">VEGGIES</h1>
        </Container>
        <div className="img-container">
          <Slider handleClick={handleClick} ingredient={vegetables}></Slider>
        </div>
        <Container maxW="container.xl">
          <h1 className="type">FRUITS</h1>
        </Container>
        <div className="img-container">
          <Slider handleClick={handleClick} ingredient={fruit}></Slider>
        </div>
      </>
    );
  } else if (!data) {
    return <h1>Hello again!</h1>;
  } else if (ingredient) {
    return (
      <Routes>
        <Route
          path="/ingredients/*"
          element={
            <IngredientPage
              ingredient={ingredient}
              setIngredient={setIngredient}
              filtered={filtered}
            />
          }
        />
      </Routes>
    );
  }
}

export default Homepage;
