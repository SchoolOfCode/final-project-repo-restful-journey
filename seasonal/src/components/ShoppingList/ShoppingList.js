import {useEffect, useState} from 'react';
import { InputGroup, Input, Button, InputRightElement} from '@chakra-ui/react';
const api = process.env.REACT_APP_API_CALL;

function ShoppingList() {
  const [input, setInput] = useState('')
  const [userList, setUserList] = useState(null)
  const userName = 'Antony'

  useEffect(()=>{
    async function getUserList(){
      const res = await fetch(`${api}/list/user?name=${userName}`)
      const data = await res.json()
      setUserList(data.payload[0].list)
    }
    getUserList()
  },[api, userName])

  async function addIngredient(input) {
    const res = await fetch(`${api}/list/user/add?name=${userName}`,{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({item: input})
    });}

  async function deleteIngredient(input) {
    const res = await fetch(`${api}/list/user/delete?name=${userName}`,{
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({item: input})
    });}
  
  function handleDelete(ingredient, index){
    setUserList([...userList.slice(0, index), ...userList.slice(index + 1)]);
    deleteIngredient(ingredient)
  }

  function handleSubmit(e){
    e.preventDefault()
    setUserList([...userList, input])
    addIngredient(input)
    setInput("");
  }
  function handleChange(e){
    setInput(e.target.value)
  }

  return (
    <>
      <h1 style={{ fontSize: '3rem' }}>Shopping List</h1>
      <ul>
        {userList && userList.map((ingredient, i) => {
          return (
            <div key={i} style={{display: 'flex', justifyContent: 'space-between'}}>
              <li>{ingredient}</li>
              <button onClick={()=>handleDelete(ingredient,i)}>-</button>
            </div>
          );
        })}
      </ul>
      <form onSubmit={handleSubmit}>
      <Input type="text" value={input} onChange={handleChange}/>
      <button type='submit'>+</button>
      </form>
    </>
  );
}

export default ShoppingList;
