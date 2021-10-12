import React from 'react'
// import {connect} from 'react-redux'
import './App.css';
import SearchBar from "./components/SearchBar"
import Results from "./components/Results"

function App() {
  return (
    <div className="App">
      <header> <h1>Pollite</h1></header>  <br/>
      <h2>Hello! Enter your Zip Code below to find the Representatives in your area</h2>
      <SearchBar/> <br/>
      <Results/>
    </div>
  );
}

export default App;
