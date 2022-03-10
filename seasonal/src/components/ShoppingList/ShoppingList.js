import { useEffect, useState } from "react";
import { Input } from "@chakra-ui/react";
import css from "./ShoppingList.module.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const api = process.env.REACT_APP_API_CALL;

function ShoppingList({ user, cssSeason }) {
  const {isAuthenticated } = useAuth0();

  const [input, setInput] = useState("");
  const [userList, setUserList] = useState(null);
  let userId = "";
  console.log(isAuthenticated);

  if (user) {
    userId = user.sub.split("|")[1];
    console.log("id shopping", userId);
  }

  useEffect(() => {
    async function getUserList() {
      try {
        const res = await fetch(`${api}/users/list/${userId}`);
        const data = await res.json();
        setUserList(data.payload[0].list);
      } catch (e) {
        console.log(e);
      }
      // console.log(data);
    }
    if (userId) {
      getUserList();
    }
  }, [api, userId]);

  async function addIngredient(input) {
    const res = await fetch(`${api}/users/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: userId, item: input }),
    });
  }

  async function deleteIngredient(input) {
    const res = await fetch(`${api}/users/delete`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: userId, item: input }),
    });
  }

  function handleDelete(ingredient, index) {
    setUserList([...userList.slice(0, index), ...userList.slice(index + 1)]);
    deleteIngredient(ingredient);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setUserList([...userList, input]);
    addIngredient(input);
    setInput("");
  }
  function handleChange(e) {
    setInput(e.target.value);
  }

  if (isAuthenticated) {
    return (
      <>
        <div className={css.heading}>
          <h2>Here's your shopping list...</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <Input
            className={css.input}
            type="text"
            value={input}
            onChange={handleChange}
          />
          <button
            aria-label="add-ingredient"
            className={css[`addBtn${cssSeason}`]}
            type="submit"
          >
            <i class="fa-solid fa-plus"></i>
          </button>
        </form>
        <ul data-testid="shopping-list">
          {userList &&
            userList.map((ingredient, i) => {
              return (
                <div key={i} className={css[`container${cssSeason}`]}>
                  <li className={css.ingredient}>{ingredient}</li>
                  <button
                    className={css.deleteBtn}
                    onClick={() => handleDelete(ingredient, i)}
                  >
                    <i class="fa-solid fa-xmark"></i>
                  </button>
                </div>
              );
            })}
        </ul>
      </>
    );
  } else {
    return (
      <div className={css.ldsEllipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}

export default ShoppingList;
