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
    Visibility: undefined
  };

  getInfo = async (entrada) => {
    const api_call = await fetch(`https://iatacodes.org/api/v6/autocomplete?api_key=${IATA_API_KEY}&query=${entrada}`);
    const data = await api_call.json();
    console.log(data);
    this.setState({

      NombreCiudad: data.response.cities[0].name,
      Pais: data.response.cities[0].country_name,
      ArptoName: data.response.airports[0].name
    })
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
        />
      </div>
    );
  }
}

export default App;
