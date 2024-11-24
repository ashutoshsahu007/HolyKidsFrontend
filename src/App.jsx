import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Details from "./components/Details";
import Desk from "./components/Desk";

const App = () => {
  return (
    <div>
      <Header />
      <Gallery />
      <About />
      <Desk />
      <Details />
      <Footer />
    </div>
  );
};

export default App;
