import React, { Component } from "react";
import { Link } from "react-router-dom";

class Task extends Component {
  render() {
    if (this.props.task !== null) {
      return (
        <div>
          <h2>{this.props.task.task}</h2>
          <div>
            <Link to={`/editTask`}>Edit</Link>
          </div>
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
