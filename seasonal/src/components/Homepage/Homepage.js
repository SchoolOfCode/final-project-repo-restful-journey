import React from "react";
import { Container } from "@chakra-ui/react";
import { useFetch } from "../hooks/useFetch.js";
import { seasonQuotes, getSeason } from "../../libs/seasonalData.js";
import { useState, useEffect } from "react";
import "./Homepage.css";
import Slider from "../Slider/slider.js";

const season = getSeason();
const randomNumber = Math.floor(Math.random() * seasonQuotes[season].length);
// console.log(randomNumber);

//test api used for testing useFetch custom hook. Will be replaced with ingredients back end.
const api = process.env.REACT_APP_API_CALL;

const date = new Date();

// This function filters the fruit and vegetables, so they can be displayed seperately on the homepage
function filterVegetables(array, boolean) {
  const vegetables = array.filter((item) => {
    return item.isfruit === boolean;
  });
  // console.log(vegetables);
  return vegetables;
}

function Homepage() {
  const [ingredient, setIngredient] = useState(null);
  const [vegetables, setVegetables] = useState([]);
  const [fruit, setFruit] = useState([]);

  const [data] = useFetch(`${api}/ingredients`);
  console.log(data);
  console.log(getSeason());

  function handleClick(e) {
    setIngredient(e.target.alt);
    console.log(ingredient);
  }

  useEffect(() => {
    if (data) {
      filterVegetables(data.payload);
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      setVegetables(filterVegetables(data.payload, false));
      setFruit(filterVegetables(data.payload, true));
      // console.log(vegetables);
      // console.log(fruit);
    }
  }, [data]);

  if (data) {
    return (
      <>
        <h1 className="date">{date.toDateString()}</h1>
        <div className="greeting">
          <h1>Hello username! 👋🏼</h1>
          <br />
          <h2>{seasonQuotes[season][randomNumber]}</h2>
        </div>
        <div className="info">
          <h2>
            Here are the fruits and vegetables that are in season this{" "}
            {[season]} - click on any of the fruits or veggies below that take
            your fancy to look for recipe inspiration!
          </h2>
        </div>
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
  }
}

export default Homepage;
