import React from 'react';
import axios from 'axios';
import DarkModeButton from './components/DarkModeButton';
import './App.css';

class App extends React.Component {

  state = {
    title: 'Womens World Cup',
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

  handleSurprise = e => {
    e.preventDefault();
    this.setState({ title: 'These People are Awesome!' });
  };

  render() {
    return (
      <div className="App">
        <h1 id='title'>{this.state.title}</h1>
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
        <button id='btn' onClick={this.handleSurprise}>Click Me For A Surprise!</button>
      </div>
    );
  };
};

export default App;
