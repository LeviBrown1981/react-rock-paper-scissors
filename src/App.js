import React from 'react';
import './App.css';

const PlayerCard = ()=> {
  const style = {
    background: color
  }
  return(
    <div style = {style} className="player-card">
        {symbol}
    </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props)
    this.symbols = ["rock", "paper", scissors, ]
    this.state = { }
  }

  runGame = () => {
    this.setState({
      playerRed: this.symbols[Math.floor(Math.random()*3)],
      playerBlue: this.symbols[Math.floor(Math.random()*3)]
    })
  }

  render(){
    return {
      <div className="App">
        <PlayerCard 
          color="red"
          symbol={this.state.playerRed}  />
        <PlayerCard 
          color="blue"
          symbol={this.state.playerBlue} />
        <button onclick={this.runGame}>Run Game</button>
      </div>
    };
  }
}

export default App;
