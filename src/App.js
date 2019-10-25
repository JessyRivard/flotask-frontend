import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
// import Home from './components/home/home';
import Home from './components/home/home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
