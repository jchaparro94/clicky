import React, { Component } from "react";
import character from "./character.json";

class App extends Component {
  
  state = {
    character,
    score: 0,
    highScore: 0,
    clickedArr: []
  };
  // handleImageClick = (id) => {
  //   console.log(id);
  //   this.setState({
  //     score: this.state.score +1
  //   })

  // }
  handleImageClick = (id) => {
    console.log(id);
    const shuffledArr = this.shuffledCharacters(character);
    this.setState({ character:shuffledArr});
    if(this.state.clickedArr.includes(id)) {
      this.setState({ score: 0, clickedArr: [] });
    } else {
      this.setState({
        clickedArr: this.state.clickedArr.concat([id]),
        score: this.state.score + 1
      });
    }
    if(this.state.score >= this.state.highScore) {
      this.setState({highScore: this.state.score + 1});
    }
  }

  shuffledCharacters = (characterArr) => {
      for(let i = characterArr.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [characterArr[i], characterArr[j]] = [characterArr[j], characterArr[i]];
    }
    return characterArr;
  }

  render() {
    let displayImages = this.state.character.map(each => 
      <img key={each.id} alt={each.name} onClick={() => this.handleImageClick(each.id)} src={each.image}></img>
    )
    return(
      <div>
      <div id="header">
        <p>Clicky Game</p>
        <p>Click any image to begin!</p>
        <p>Score:{this.state.score} High Score:{this.state.highScore}</p>
      </div>
      <div id="container">
        <p>Click on any image to earn a point!</p>
        <p>Click on the same image twice and GAME OVER!</p>
      </div>
      <div id="images">{displayImages}</div>
      <div id="foot">
        <p>clicky game</p>
      </div>
      </div>
    )
  }
}

export default App;
