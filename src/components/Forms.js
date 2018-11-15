import React from 'react';

const Forms = props => {
		return(
			<form onSubmit={props.getInfo}>
				<input 
				type="text" 
				name="ciudad" 
				placeholder="Ciudad..."/>
				<button>Buscar</button>
			</form>
		);
}
export default Forms;