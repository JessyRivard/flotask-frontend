import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
// import Home from './components/home/home';
import Lists from './components/home/lists/lists'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Lists}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
