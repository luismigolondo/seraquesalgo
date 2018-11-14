import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Forms from './components/Forms';
import Opinion from './components/Opinion';

const IATA_API_KEY = "e0ef4721-9141-4bba-bfa2-7413687cd407";

class App extends Component {

  state = {
    NombreCiudad: undefined,
    Pais: undefined,
    Temperature: undefined,
    Descripcion: undefined,
    ArptoName: undefined,
    Visibility: undefined,
    error: undefined
  };

  getInfo = async (entrada) => {
    entrada.preventDefault();
    const ciudad = entrada.target.elements.ciudad.value;
    const api_call = await fetch(`https://iatacodes.org/api/v6/autocomplete?api_key=${IATA_API_KEY}&query=${ciudad}`);
    const data = await api_call.json();
    if(ciudad)
    {
      console.log(data);
      try
      {
        const nombreCiudad = data.response.cities[0].name;
        const pais = data.response.cities[0].country_name;
        const nombreAeropuerto = data.response.airports[0].name;
        this.setState({
          NombreCiudad: nombreCiudad,
          Pais: pais,
          ArptoName: nombreAeropuerto,
          error: ""
         })
      }
      catch(err)
      {
        this.setState({
        NombreCiudad: undefined,
        Pais: undefined,
        ArptoName: undefined,
        error: "La ciudad no se encontro el la base de datos"
       })
      }
    }
    else
    {
      this.setState({
        NombreCiudad: undefined,
        Pais: undefined,
        ArptoName: undefined,
        error: "Los campos estan vacios"
       })
    }
  }

  render() {
    return (
      <div className="App">
        <Title />
        <Forms getInfo={this.getInfo}/>
        <Opinion 
        ciudad={this.state.NombreCiudad}
        pais={this.state.Pais}
        airportName={this.state.ArptoName}
        error = {this.state.error}
        />
      </div>
    );
  }
}

export default App;
