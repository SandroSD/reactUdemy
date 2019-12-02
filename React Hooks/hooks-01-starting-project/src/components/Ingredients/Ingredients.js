import React, { useState, useEffect, useCallback, useReducer, useMemo } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';
import ErrorModal from '../UI/ErrorModal';

const ingredientReducer = (currentIngredients, action) => {
	switch (action.type) {
		case 'SET':
			return action.ingredients;
		case 'ADD':
			return [...currentIngredients,
					action.ingredient];
		case 'DELETE':
			return currentIngredients.filter(ing => ing.id !== action.id);
		default:
			throw new Error('Should not get there!');
	}
}

const httpReducer = (httpState, action) => {
	switch(action.type) {
		case 'SEND':
			return {loading: true, error: null};
		case 'RESPONSE':
			return {...httpState, loading: false};
		case 'ERROR':
			return {loading: false, error: action.errorMessage};
		case 'CLEAR':
			return {...httpState, error: null};
		default:
			throw new Error('Should not get there!');
	}
}

const Ingredients = () => {
	const [userIngredients, dispatch] = useReducer(ingredientReducer, []);
	const [httpState, dispatchHttp] = useReducer(httpReducer, {loading: false, error: null});
	//const [ userIngredients, setUserIngredients ] = useState([]);
	//const [ isLoading, setIsLoading ] = useState(false);
	//const [ error, setError ] = useState();

	const filteredIngredientesHandler = useCallback(filteredIngredients => {
		//setUserIngredients(filteredIngredients);
		dispatch({
			type: 'SET',
			ingredients: filteredIngredients
		});
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

	const addIngredientHandler = useCallback(ingredient => {
		dispatchHttp({type: 'SEND'});
		fetch('https://react-hooks-update-9d2bc.firebaseio.com/ingredients.json', {
			method: 'POST',
			body: JSON.stringify(ingredient),
			headers: { 'Content-Type': 'application/json' }
		}).then(response => {
			dispatchHttp({type: 'RESPONSE'})
			return response.json();
		}).then(responseData => {
			/*setUserIngredients(prevIngredients => [
				...prevIngredients,
				{ id: responseData.name, ...ingredient }
			]);*/
			dispatch({
				type: 'ADD',
				ingredient: {
					id: responseData.name, ...ingredient 
				}
			})
		})
	}, []);

	const removeIngredientHandler = useCallback(ingredientId => {
		dispatchHttp({type: 'SEND'});
		fetch(`https://react-hooks-update-9d2bc.firebaseio.com/ingredients/${ingredientId}.json`, {
			method: 'DELETE',
		}).then(responseData => {
			dispatchHttp({type: 'RESPONSE'});
			/*setUserIngredients(prevIngredients =>
				prevIngredients.filter(ingredient => ingredient.id !== ingredient)
			);*/
			dispatch({
				type: 'DELETE',
				id: ingredientId
			})
		}).catch(error => {
			dispatchHttp({type: 'ERROR', errorMessage: 'Something went wrong!'});
		});
	}, []);

	//recalculated when you only need, not always.
	const ingredientList = useMemo(()=>{
		return (
			<IngredientList	ingredients={userIngredients}
							onRemoveItem={removeIngredientHandler}
			/>
		)
	}, [userIngredients, removeIngredientHandler]);

	const clearError = useCallback(() => {
		dispatchHttp({type: 'CLEAR'});
	}, []);

	return (
		<div className="App">
			{httpState.error && <ErrorModal onClose={clearError}>{httpState.error}</ErrorModal>}
		<IngredientForm onAddIngredient={addIngredientHandler} loading={httpState.loading} />
		<section>
			<Search	onLoadIngredients={filteredIngredientesHandler} />
			{ingredientList}
		</section>
		</div>
	);
}

export default Ingredients;
