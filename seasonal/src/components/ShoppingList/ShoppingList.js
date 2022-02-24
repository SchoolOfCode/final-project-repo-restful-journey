import {useState} from 'react';
import { InputGroup, Input, Button, InputRightElement} from '@chakra-ui/react';


function ShoppingList({ list, setList }) {
  const [input, setInput] = useState('')

function addItem(item){
  setList([...list, item])
}
function handleDelete(index){
  setList([...list.slice(0, index), ...list.slice(index + 1)]);
}


function handleSubmit(e){
  e.preventDefault()
  addItem(input)
  setInput("");
}
function handleChange(e){
  setInput(e.target.value)
}

  return (
    <>
      <h1 style={{ fontSize: '3rem' }}>Shopping List</h1>
      <ul>
        {list.map((item, i) => {
          return (
            <div key={i} style={{display: 'flex', justifyContent: 'space-between'}}>
              <li>{item}</li>
              <button onClick={()=>handleDelete(i)}>-</button>
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
