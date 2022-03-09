import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import css from "./favourites.module.css";

const api = process.env.REACT_APP_API_CALL;

function Favourites({ user, cssSeason }) {
  // const id = "117441255094162799546";
  const id = localStorage.getItem("userId");
  const url = `${api}/users/favourites/${id}`;

  const [favourites, setFavourites] = useState(null);
  const [data] = useFetch(`${url}`);
  const [recipe, setRecipe] = useState(null);

  // let userId;
  // if (user) {
  //   userId = user.sub.split("|")[1];
  //   console.log("id recipe", userId);
  // }
  useEffect(() => {
    if (data) {
      setFavourites(data.payload[0].favourites);
      console.log(data.payload[0].favourites);
    }
  }, [data]);

  useEffect(() => {
    if (recipe) {
      async function deleteRecipe() {
        console.log(typeof recipe);
        try {
          await fetch(`${api}/users/favourites`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: id, recipeIndex: recipe }),
          });
        } catch (e) {
          console.log(e);
        }
      }
      deleteRecipe();
    }
  }, [id, recipe]);

  function handleDelete(index) {
    setRecipe(index);
    setFavourites([
      ...favourites.slice(0, index),
      ...favourites.slice(index + 1),
    ]);
  }

  return (
    <div className={css.container}>
      <hr className={css[`hr${cssSeason}`]} />
      <h1 className={css.greeting}>Favourites</h1>
      <h2>Welcome to your saved recipes...</h2>
      {favourites &&
        favourites.map((item, index) => {
          return (
            <div className={css.recipeContainer} key={item.id}>
              <figure className={css.recipeContainer2}>
                <Link to="/recipes" state={{ recipeId: item.id }}>
                  <img
                    className={css.image}
                    src={item.image}
                    alt={item.id}
                  ></img>
                </Link>
                <figcaption className={css[`caption${cssSeason}`]}>
                  {item.title}
                </figcaption>
              </figure>
              <div className={css.btn}>
                <button
                  className={css.deleteBtn}
                  onClick={() => handleDelete(index)}
                >
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Favourites;
