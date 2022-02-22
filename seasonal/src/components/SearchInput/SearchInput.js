import {useState} from 'react';
import { InputGroup, Input, Button, InputRightElement} from '@chakra-ui/react';

function SearchInput({ ingredient, setIngredient }) {
const [input, setInput] = useState('')

  function handleChange(e) {
    e.preventDefault()
    setInput(e.target.value);
  }
  function handleClick(e){
    e.preventDefault()
    setIngredient(input)
  }
  
  return (
    
    <form onSubmit={handleClick}>
    <InputGroup size="md">
      <Input pr="4.5rem" placeholder={ingredient} onChange={handleChange}/>
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" type="submit">
          Search
        </Button>
      </InputRightElement>
    </InputGroup>
    </form>
  );
}

export default SearchInput;
