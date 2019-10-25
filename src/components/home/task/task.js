import React, { Component } from "react";

class Task extends Component {
  render() {
    if (this.props.task !== null) {
      return (
        <div>
          <h2>{this.props.task.task}</h2>
          <p>priority: {this.props.task.priority}</p>
          <p>{this.props.task.details}</p>
          <p>
            <i>Created: {this.props.task.meta.created}</i>
          </p>
        </div>
      );
    } else return <div>No task selected</div>;
  }
}

export default Task;
