import { useEffect, useState } from "react";
import { Input } from "@chakra-ui/react";
import css from "./ShoppingList.module.css";

const api = process.env.REACT_APP_API_CALL;

function ShoppingList() {
  const [input, setInput] = useState("");
  const [userList, setUserList] = useState(null);
  const userName = "Antony";

  useEffect(() => {
    async function getUserList() {
      const res = await fetch(`${api}/list/user?name=${userName}`);
      const data = await res.json();
      setUserList(data.payload[0].list);
    }
    getUserList();
  }, [api, userName]);

  async function addIngredient(input) {
    const res = await fetch(`${api}/list/user/add?name=${userName}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ item: input }),
    });
  }

  async function deleteIngredient(input) {
    const res = await fetch(`${api}/list/user/delete?name=${userName}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ item: input }),
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
          className={css.addBtn}
          type="submit"
        >
          <i class="fa-solid fa-plus"></i>
        </button>
      </form>
      <ul data-testid="shopping-list">
        {userList &&
          userList.map((ingredient, i) => {
            return (
              <div key={i} className={css.container}>
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
}

export default ShoppingList;
