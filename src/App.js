import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import ImageCard from "./components/ImageCard";
import images from "../src/images.json";

class App extends Component {
  // Set this.state.images to the images json array
  constructor(props) {
    super(props);
    this.state = {
      images: images,
      topScore: 0,
      currentScore: 0
    };
    this.checkClick = this.checkClick.bind(this);
  }

  // Function that checks if an image has been clicked
  checkClick(id) {
    //  set image clicked variable by finding the id of the clicked image
    let imageClicked = this.state.images.filter(image => image.id === id)[0];
    // shuffle the images
    let imageShuffle = this.state.images.slice().sort(function(a, b) {
      return 0.5 - Math.random();
    });
    // set the click state if the image has not been clicked before
    if (!imageClicked.clicked) {
      imageClicked.clicked = true;
      imageShuffle[
        imageShuffle.findIndex(image => image.id === id)
      ] = imageClicked;

      // increment the score and shuffle the images
      this.setState({
        images: imageShuffle,
        currentScore: this.state.currentScore + 1,
        topScore:
          this.state.currentScore + 1 > this.state.topScore
            ? this.state.currentScore + 1
            : this.state.topScore
      });
    }

    //  if the image has already been clicked, set clicked to false and restart game
    else {
      let resetImageShuffle = imageShuffle.map(image => {
        return {
          id: image.id,
          image: image.image,
          clicked: false
        };
      });
      //  set score to 0 and shuffle images
      this.setState({
        images: resetImageShuffle,
        currentScore: 0
      });
    }
  }
  // Map over this.state.images to render an ImageCard component for each image
  render() {
    return (
      <Wrapper>
        <Header currentScore={this.state.currentScore} topScore={this.state.topScore}/>
        {this.state.images.map(image => (
          <ImageCard
            checkClick={this.checkClick}
            key={image.id}
            id={image.id}
            name={image.name}
            image={image.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
