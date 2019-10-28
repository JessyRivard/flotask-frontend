import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Lists from "./lists/lists";
import Task from "./task/task";
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
    var id = e.target.htmlFor;
    api.fetchTask(id).then(response => {
      this.setState(() => {
        return {
          selectedTask: response
        };
      });
    });
  };

  render() {
    return (
      <div>
        <NavLink to="/newtask" >New Task</NavLink>
        <Lists lists={this.state.lists} onSelectTask={this.onSelectTask} />
        <br />
        <Task task={this.state.selectedTask} />
      </div>
    );
  }
}

export default Home;
