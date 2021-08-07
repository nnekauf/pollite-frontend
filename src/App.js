import React from 'react'
// import {connect} from 'react-redux'
import './App.css';
import SearchBar from "./components/SearchBar"
import Results from "./components/Results"

function App() {
  return (
    <div className="App">
      Welcome to Pollite <br/>
      <SearchBar/> <br/>
      <Results/>
    </div>
  );
}

export default App;
