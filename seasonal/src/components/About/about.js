import React from "react";
import { Link } from "react-router-dom";
import css from "./About.module.css";

export function About({ cssSeason }) {
  return (
    <div>
      <div className={css[`aboutUs${cssSeason}`]}>
        <h1>- About Us - </h1>
      </div>
      <img
        className={css.image}
        src={require("../../Images/Seasons.png")}
        alt="four seasons tree"
      />
      <h2 className={css[`text${cssSeason}`]}>
        Eating seasonally means eating food that's naturally ripe and ready for
        harvest in your local area at the time, instead of imported foods from
        different climates around the world. Eating organic, seasonal food, or
        food that you've grown at home can make a large difference in cutting
        down your food miles, helping to make your diet more sustainable and
        reduce your carbon footprint. Eating local and seasonal food is not only
        more tasty and healthy (the nutrients and flavours have fully developed
        so they're sweet, crunchy and the best they can be) but better for the
        environment. Additionally, it is often more affordable, as it hasn't had
        to be imported, and is more readily available during that month.
      </h2>
      <Link to="/timeline">
        <h3 className={css[`discover${cssSeason}`]}>
          Click here for a month-to-month guide on how to eat seasonally
        </h3>
      </Link>
    </div>
  );
}
