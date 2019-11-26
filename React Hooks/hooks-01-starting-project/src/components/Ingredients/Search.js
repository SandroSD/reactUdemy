import React, { useState, useEffect, useRef } from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {
	const { onLoadIngredients } = props;
	const [enteredFilter, setEnteredFilter] = useState('');
	const inputRef = useRef();

	useEffect(() => {
		const timer = setTimeout(() => {
			if(enteredFilter === inputRef.current.value) {
				const query = enteredFilter.length === 0 ? '' : `?orderBy="title"&equalTo="${enteredFilter}"`;
				fetch('https://react-hooks-update-9d2bc.firebaseio.com/ingredients.json' + query)
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
					onLoadIngredients(loadedIngredients);
				});
			}
		},500);
		return () => {
			clearTimeout(timer);
		};
		/* Si tenes [] como dependencias de useEffect (cuando funciona igual qe componentDidMount),
			la función para limpiar el timer se ejecuta cuando el componente se desmonta*/
	}, [enteredFilter, onLoadIngredients, inputRef]); //cambia solo si cambian algunos de estos dos valores pasados como segundo parámetro

	return (
		<section className="search">
		<Card>
			<div className="search-input">
			<label>Filter by Title</label>
			<input	type="text"
					ref={inputRef}
					value={enteredFilter}
					onChange={event=>setEnteredFilter(event.target.value)}
			/>
			</div>
		</Card>
		</section>
	);
});

export default Search;