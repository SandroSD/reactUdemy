import React, { useState } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

function Ingredients() {
	const [userIngredients, setUserIngredients] = useState([]);

	const addIngredientHandler = ingredient => {
		fetch('https://react-hooks-63bb9-default-rtdb.firebaseio.com/ingredients.json', {
			method: 'POST',
			body: JSON.stringify(ingredient),
			headers: { 'Content-Type': 'application/json' }
		})
			.then(response => {
				return response.json();
			})
			.then(response => {
				setUserIngredients(prevIngredient => [
					...prevIngredient,
					{ id: response.name, ...ingredient }
				]);
			})
	}

	return (
		<div className="App">
		<IngredientForm onAddIngredient={addIngredientHandler} />

		<section>
			<Search />
			<IngredientList ingredients={userIngredients} onRemoveItem={() => {}} />
		</section>
		</div>
	);
}

export default Ingredients;
