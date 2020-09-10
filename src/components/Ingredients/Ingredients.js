import React, {useState} from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';
import IngredientList from './IngredientList';

function Ingredients() {
  const [userIngredients, setUserIngredients] = useState([]);
  
  const addIngredientHandler = ingredient =>{
    setUserIngredients(prevIngredients => [
      ...prevIngredients,
      { id: Math.random().toString(), ...ingredient }
    ])
  }

  const removeIngredientHandler = ingredient => {
    const temp =[...userIngredients];
    temp.splice(ingredient, 1);
    setUserIngredients(temp)
  }


  return (
    <div className="App">
      <IngredientForm onAddIngredient = {addIngredientHandler} />

      <section>
        <Search />
        {/* Need to add list here! */}
        <IngredientList ingredients = {userIngredients} onRemoveIngredient={removeIngredientHandler}/>
      </section>
    </div>
  );
}

export default Ingredients;
