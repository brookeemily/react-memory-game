import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import ImageCard from "./components/ImageCard";
import images from "../src/images.json";

class App extends Component {
// Set this.state.images to the images json array
  state = {
    images
  };

// Map over this.state.images to render an ImageCard component for each image 
render() {
  return (
    <Wrapper>
      <Header />
      {this.state.images.map(image => (
      <ImageCard
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
