import React from "react";
import About from "./../About";
import Footer from "./../Footer";
import Home from "./../Home";
import Portfolio from "./../Portfolio";
import Profile from "./../Profile";
import SocialMedia from "./../SocialMedia";
import Work from "./../Work";
class Index extends React.Component {
  render() {
    return (
      <div className="App">
        <Home />
        <Work />
        <Portfolio />
        <Profile />
        <About />
        <SocialMedia />
        <Footer />
      </div>
    );
  }
}

export default Index;
