import React from 'react'
import {connect} from 'react-redux'
import './App.css';
import SearchBar from "./components/SearchBar"

function App() {
  return (
    <div className="App">
      Welcome to Pollite <br/>
      <SearchBar/> <br/>
      /add representatives component here/
    </div>
  );
}

export default App;
