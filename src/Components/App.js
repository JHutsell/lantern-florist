import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import FloristDetail from './FloristDetail';
import './App.css';

function App() {
  require('dotenv').config()
  return (
    <Switch>
      <div className="App">
        <Home />
      </div>
    </Switch>
  );
}

export default App;
