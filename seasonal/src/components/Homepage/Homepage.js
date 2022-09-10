import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@chakra-ui/react";
import { useFetch } from "../hooks/useFetch.js";
import { seasonQuotes, getSeason } from "../../libs/seasonalData.js";
import { useState, useEffect } from "react";
import Slider from "../Slider/slider.js";
import css from "./Homepage.module.css";
import { Select } from "@chakra-ui/react";

const season = getSeason();
// console.log(randomNumber);

//test api used for testing useFetch custom hook. Will be replaced with ingredients back end.
const api = process.env.REACT_APP_API_CALL;

// This function filters the fruit and vegetables, so they can be displayed seperately on the homepage
function filterVegetables(array, boolean) {
  const vegetables = array.filter((item) => {
    return item.isfruit === boolean;
  });
  return vegetables;
}

function Homepage({ user, cssSeason, handleSeason }) {
  const [ingredient, setIngredient] = useState(null);
  const [vegetables, setVegetables] = useState([]);
  const [fruit, setFruit] = useState([]);

  console.log(`Season determined from app level ${cssSeason}`);

  const randomNumber = Math.floor(
    Math.random() * seasonQuotes[cssSeason].length
  );

  const [data] = useFetch(`${api}/ingredients/season/${cssSeason}`);
  // console.log(data);
  // console.log(`Season determined from actual date ${getSeason()}`);

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
    }
  }, [data]);

  if (data) {
    return (
      <>
        <div className={css[`greeting${cssSeason}`]}>
          <h1 className={css[`hello${cssSeason}`]}>
            Hello, {user ? user.nickname : "guest"}! 👋🏼
          </h1>
          <h4 className={css.option}>What season are you interested in?</h4>
          <Select onChange={handleSeason} size="sm" value={cssSeason}>
            <option value="summer">Summer ☀️</option>
            <option value="autumn">Autumn 🍂</option>
            <option value="winter">Winter ❄️</option>
            <option value="spring">Spring 🌱</option>
          </Select>
          <br />
          <h2>{seasonQuotes[cssSeason][randomNumber]}</h2>
        </div>
        <div className={css[`info${cssSeason}`]}>
          <h2>
            Here are the fruits and vegetables that are in season this{" "}
            {[season]} - click on any of the fruits or veggies below that take
            your fancy to look for recipe inspiration!
          </h2>
        </div>
        <Container maxW="container.xl">
          <h1 className={css[`type${cssSeason}`]}>- VEGGIES -</h1>
        </Container>
        <div className={css.imgContainer}>
          <Slider handleClick={handleClick} ingredient={vegetables}></Slider>
        </div>
        <Container maxW="container.xl">
          <h1 className={css[`type${cssSeason}`]}>- FRUITS -</h1>
        </Container>
        <div className={css.imgContainer}>
          <Slider handleClick={handleClick} ingredient={fruit}></Slider>
        </div>
        <div>
          <Link to="/about">
            <h3 className={css[`aboutus${cssSeason}`]}>Why shop seasonally?</h3>
          </Link>
        </div>
        <div className={css.footer}></div>
      </>
    );
  } else if (!data) {
    return (
      // Loading Spinner
      <div className={css[`ldsEllipsis${cssSeason}`]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}

export default Homepage;
