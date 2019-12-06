import React from 'react';
import axios from 'axios';
import DarkModeButton from './components/DarkModeButton';
import './App.css';

class App extends React.Component {

  state = {
    players: []
  }

  componentDidMount() {
    // console.log('CDM Invoked');

    axios.get('http://localhost:5000/api/players')
    .then(res => {
      // console.log('Initial Player Data: ', res.data);
      this.setState({ players: [...this.state.players, ...res.data]});
      // console.log('First State Update: ', this.state.players);
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Womens World Cup</h1>
        <DarkModeButton />
        <div className='playerCard'>
          {this.state.players.map(person => 
            <div key={person.id}>
              <h3>{person.name}</h3>
              <p>{person.country}</p>
              {/* {console.log('This is person: ', person)} */}
            </div>
          )}
        </div>

      </div>
    );
  };
};

export default App;
