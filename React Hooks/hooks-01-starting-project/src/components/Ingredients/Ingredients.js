import React, { useState, useEffect, useCallback } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const Ingredients = () => {
	const [ userIngredients, setUserIngredients ] = useState([]);

	const filteredIngredientesHandler = useCallback(filteredIngredients => {
		setUserIngredients(filteredIngredients);
	}, []);

	//after every render component cycle.
	/*useEffect( () => {
		fetch('https://react-hooks-update-9d2bc.firebaseio.com/ingredients.json')
		.then(response => response.json())
		.then(responseData => {
			const loadedIngredients = [];
			for(const key in responseData) {
				loadedIngredients.push({
					id: key,
					title: responseData[key].title,
					amount: responseData[key].amount
				})
			}
			setUserIngredients(loadedIngredients);
		});
	}, []);*/ //Cuando pasas como segundo parámetro del useEffect [] funciona como componentDidMount y se activa solo una vez luego del primer render.

	useEffect(()=>{
		console.log('Rendering Ingredients', userIngredients);
	}, [userIngredients]);

	const addIngredientHandler = ingredient => {
		fetch('https://react-hooks-update-9d2bc.firebaseio.com/ingredients.json', {
			method: 'POST',
			body: JSON.stringify(ingredient),
			headers: { 'Content-Type': 'application/json' }
		}).then(response => {
			return response.json();
		}).then(responseData => {
			setUserIngredients(prevIngredients => [
				...prevIngredients,
				{ id: responseData.name, ...ingredient }
			]);
		})
	}
	return (
		<div className="App">
		<IngredientForm onAddIngredient={addIngredientHandler} />
		<section>
			<Search	onLoadIngredients={filteredIngredientesHandler} />
			<IngredientList ingredients={userIngredients} onRemoveItem={() => {}} />
		</section>
		</div>
	);
}

export default Ingredients;
