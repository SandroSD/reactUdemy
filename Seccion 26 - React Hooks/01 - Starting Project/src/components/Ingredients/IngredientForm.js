import React, { useState } from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo(props => {

	const [state, setState] = useState({
		title: '',
		amount: ''
	});

  	const submitHandler = event => {
		event.preventDefault();
		props.onAddIngredient({title: state.title, amount: state.amount});
  	};

  /**
   * useState, el parametro de la segunda posición de useState nos devuelve la ultima copia del state que no es necesariamente la que está en la primer posición
   * ya que puede tener muchos cambios en poco tiempo y no es lo que escribimos.
   * 
   * conviene usar multiples states para datos, por ejemplo en un formulario tantas variables como entradas tengas.
   * (aqui convendría usar 2 useState, uno para title y otro para amount).
   */
  return (
    <section className="ingredient-form">
		<Card>
			<form onSubmit={submitHandler}>
			<div className="form-control">
				<label htmlFor="title">Name</label>
				<input  type="text"
						id="title"
						value={state.title}
						onChange={event => {
							const newTitle = event.target.value;
							setState(previousState => ({title: newTitle, amount: previousState.amount }))
							}
						}
				/>
			</div>
			<div className="form-control">
				<label htmlFor="amount">Amount</label>
				<input	type="number"
						id="amount"
						value={state.amount}
						onChange={event => {
							const newAmount = event.target.value;
							setState(previousState => ({amount: newAmount, title: previousState.title }))
							}
						}
				/>
			</div>
			<div className="ingredient-form__actions">
				<button type="submit">Add Ingredient</button>
			</div>
			</form>
		</Card>
    </section>
  );
});

export default IngredientForm;
