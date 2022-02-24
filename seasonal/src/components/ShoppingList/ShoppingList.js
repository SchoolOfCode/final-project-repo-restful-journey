import React from 'react';

function ShoppingList({ list, setList }) {
  
function handleDelete(index){
  setList([...list.slice(0, index), ...list.slice(index + 1)]);
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
    </>
  );
}

export default ShoppingList;
