import React from 'react';

const Forms = props => {
		return(
			<div>
				<form onSubmit={props.getInfo}>
					<input 
					type="text" 
					name="ciudad" 
					placeholder="Ciudad..."/>
					<button>Buscar</button>
				</form>
			</div>

		);
}
export default Forms;