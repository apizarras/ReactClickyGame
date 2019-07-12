import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';

//import components
import SmurfCard from "./components/SmurfCard";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper"
import smurfs from "./smurfs.json";


class App extends Component {
  state = {
    smurfs,
    score: 0,
    message: "",
    topScore: 0,
    cardsClicked: [],
  };

  clickCard = id => {
    const shuffledCardsArray = this.randomizeCards(smurfs);
    this.setState({smurfs: shuffledCardsArray});
    if(this.state.cardsClicked.includes(id)) {
      this.setState({score: 0, cardsClicked: [], message: "Oops, that is incorrect!"})
    } else {
      this.setState({
        cardsClicked: this.state.cardsClicked.concat([id]),
        score: this.state.score + 1,
        message: "Correct guess!"
      });
    }
    if(this.state.score > this.state.topScore) {
      this.setState({topScore: this.state.score});
    }
  }
  randomizeCards = (array) => {
      for(let i=array.length-1; i>0; i--) {
        const r = Math.floor(Math.random() * (i+1));
        const t = array[i];
        array[i] = array[r];
        array[r] = t;
      }
      return array;
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Smurf-tastic Memory Game</h1>
        </header>
        <h3 className="App-intro center">
          <strong>Click on a unique image to earn points, clicking on the same image more than once will end the game!</strong> 
          <p className = "score"><strong>Score: {this.state.score} | TopScore: {this.state.topScore}</strong></p>
          <p className="message"><strong>{this.state.message}</strong></p>
        </h3>
      <Wrapper>
        {this.state.smurfs.map(smurf=> (
          <SmurfCard
            clickCard={this.clickCard}
            id={smurf.id}
            key={smurf.id}
            name={smurf.name}
            image={smurf.image}
            occupation={smurf.occupation}
            location={smurf.location}
            />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;