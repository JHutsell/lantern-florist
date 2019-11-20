import React from 'react';
import Home from './Home';
import './App.css';

function App() {
  require('dotenv').config()
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
