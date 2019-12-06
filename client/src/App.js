import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {

  state = {
    players: []
  }

  componentDidMount() {
    console.log('CDM Invoked');

    axios.get('http://localhost:5000/api/players')
    .then(res => {
      console.log('Initial Player Data: ', res.data);
      this.setState({ players: [...this.state.players, res.data]});
      console.log('First State Update: ', this.state.players);
    });
  };

  componentDidUpdate() {
    console.log('CDU Invoked')
  };

  render() {
    return (
      <div className="App">
        <h1>Womens World Cup</h1>
        <div className='playerCard'>
        
        </div>

      </div>
    );
  };
};

export default App;
