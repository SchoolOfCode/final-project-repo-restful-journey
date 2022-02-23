import { Container } from '@chakra-ui/react';
import SearchInput from '../SearchInput/SearchInput';
import css from './SearchPage.module.css';


function SearchPage({ingredient,setIngredient, recipes, setRecipes}) {

  function handleClick(e) {}


  return (
    <Container maxW="container.md" className={css.mainContainer}>
      <SearchInput ingredient={ingredient} setIngredient={setIngredient} />
      <div className={css.container1}>
      {recipes.slice(4, 10).map((item, index) => {
        return (
          <div key={index} className={css.container2}>
            <div className={css.container3}>
              <img
                src={item.recipe.images.REGULAR.url}
                alt={item.label}
                onClick={(e) => handleClick(e)}
              ></img>
              <p>{item.recipe.label}</p>
            </div>
          </div>
        );
      })}
      </div>
    </Container>
  );
}

export default SearchPage;
