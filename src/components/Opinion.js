import React from 'react';

const Opinion = props => {

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    var hora = today.getHours();
    var minuto = today.getMinutes();
    var segundo = today.getSeconds();
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    if (hora > 12) {
        hora = hora - 12
    }
    if (minuto < 10) {
        minuto = '0' + minuto
    }
    if (segundo < 10) {
        segundo = '0' + segundo
    }

    today = mm + '/' + dd + '/' + yyyy + ' ' + hora + ':' + minuto + ':' + segundo;

    return (
        <div>
				<div className='titlePronostic'>
					{props.ciudad && props.pais && <p className='opinion__key'>Ciudad: <span className='opinion__value'>{props.ciudad} , {props.pais}</span></p>}
					<p className='opinion__key'>Fecha: <span className='opinion__value'>{today}</span></p>
					<p className='opinion__key'>Sus condiciones</p>
					<p className='opinion__key'>Temperatura: <span className='opinion__value'></span></p>
					<p className='opinion__key'>Descripcion: <span className='opinion__value'></span></p>
					{props.airportName && <p className='opinion__key'>Aeropuerto: <span className='opinion__value'>{props.airportName}</span></p>}
					<p className='opinion__key'>Visibilidad: </p>
					{props.error && <p className='opinion__error'>Error 404: {props.error}</p>}
					<h3 className='opinion__key'>Creemos que...</h3>
					<span className='opinion__value'>Son muy buenas condiciones! buen dia para volar...</span>
				</div>

			</div>
    );

}
export default Opinion;