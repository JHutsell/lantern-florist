import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import FloristDetail from './FloristDetail';
import './App.css';

function App() {
  require('dotenv').config()
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={(routerProps)=> <Home  {...routerProps}/>} />
        <Route path='/floristDetail' render={(routerProps)=> <FloristDetail {...routerProps} />} />
      </Switch>
    </div>
  );
}

export default App;
