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
					{props.ciudad && props.pais && <h2>Nombre de la ciudad: {props.ciudad} , {props.pais}</h2>}
					<h4>Fecha: {today}</h4>
					<h3>Sus condiciones</h3>
					<p>Temperatura: </p>
					<p>Descripcion: </p>
					{props.airportName && <p>Nombre del aeropuerto: {props.airportName}</p>}
					<p>Visibilidad: </p>
					{props.error && <p>Error: {props.error}</p>}
				</div>
				<div className='opinion'>
					<h3>Creemos que...</h3>
					<p>Son muy buenas condiciones! buen dia para volar...</p>
				</div>

			</div>
    );

}
export default Opinion;