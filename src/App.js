import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/home';
import CreateTask from './components/createTask/createTask';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/newtask" component={CreateTask}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
