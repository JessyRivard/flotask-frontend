import React, { Component } from "react";
import {Switch, Route } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import Lists from "./lists/lists";
import Task from "./task/task";
import EditTask from "./task/editTask";
import * as api from "../../api";

class Home extends Component {
  state = {
    lists: [],
    selectedTask: null,
    errorOccured: false,
    errorMessage: ""
  };

  componentDidMount() {
    this.callLists();
  }

  callLists = () => {
    api.fetchLists().then(response => {
      this.setState(() => {
        return {
          lists: response
        };
      });
    });
  };

  onSelectTask = e => {
    var id = e.target.dataset.key;
    api.fetchTask(id).then(response => {
      this.setState(() => {
        return {
          selectedTask: response
        };
      });
    });
  };

  onCheck = e => {
    if (e.target.checked === true) {
    var checked = {
        _id:  e.target.id
    }
    api.complete(checked).then(response => {
        return response.data;
    })
  } else if (e.target.checked === false) {
    e.target.checked = true;
    alert("Can't undo yet, feature coming soon.")
  } else (
    alert("A problem occured.")
  )
  };

  render() {
    const ShowTask = () => {
      return (
        <Task 
        task={this.state.selectedTask}
        />
      );
    };
    const ModifyTask = () => {
      return (
        <EditTask
        task={this.state.selectedTask}
        />
      );
    }

    return (
      <div>
        <NavLink to="/newtask" >New Task</NavLink>
        <Lists lists={this.state.lists} onSelectTask={this.onSelectTask} onCheck={this.onCheck}/>
        <br />
        <Switch>
          <Route exact path="/editTask" render={ModifyTask} />
          <Route path="/" render={ShowTask} />
        </Switch>
      </div>
    );
  }
}

export default Home;
