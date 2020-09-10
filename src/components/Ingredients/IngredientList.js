import React, { useState, useEffect, useContext, useCallback } from 'react';

import './IngredientList.css';

const IngredientList = props => {
  return (
    <section className="ingredient-list">
      <h2>Loaded Ingredients</h2>
      <ul>
        {props.ingredients.map(ig => (
          <li key={ig.id}  onClick={props.onRemoveIngredient.bind(this, ig.id)}>
            <span>{ig.title}</span>
            <span>{ig.amount}x</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
/**
useState()
useEffect()
useContext()
useRefs()
useCallback();
*/

export default IngredientList;
