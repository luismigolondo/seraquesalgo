import React, { Component } from 'react';

class Forms extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	valor: ''
	  };
	}

	cambio(valor)
	{
		this.setState({valor});
		this.props.getInfo(valor);
	}

	render() {
		return(
			<div>
				<p><input 
				type="text" 
				name="ciudad" 
				placeholder="Ciudad..."
				value = {this.state.busqueda} 
				onChange={event => this.cambio(event.target.value)}/></p>
			</div>

		);
	};

}
export default Forms;