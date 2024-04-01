import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { AdDesigner } from "./components/AdDesigner";
import { Header } from "./components/Header";
import Votes from "./components/Votes";
import { Ad } from "./components/Ad";
function App() {
  return (
    <div className="App">
      <Header user="chirpus" />
      <div className="AdContainer">
        <Ad flavor={"Chocolate"} fontSize={15} darkTheme={true} />
        <Ad flavor={"Strawberry"} fontSize={15} darkTheme={false} />
        <Ad flavor={"Vanilla"} fontSize={15} darkTheme={true} />
      </div>
      <AdDesigner />
      <Votes />
    </div>
  );
}

export default App;
