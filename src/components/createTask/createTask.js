import React, { Component } from "react";
import api from "../../api";

class CreateTask extends Component {
  state = {
    lists: [],
    task: "",
    details: "",
    due: null,
    priority: null,
    belongsTo: null,
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

  handleChange = e => {
    let target = e.target;
    let value = target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    var newTask = {
      task: this.state.task,
      details: this.state.details,
      due: this.state.due,
      priority: this.state.priority,
      list: this.state.belongsTo
    };
    api.createTask(newTask).then(response => {
      if (response.error) {
        this.setState(() => {
          return {
            errorOccured: true,
            errorMessage: response.error
          };
        });
      } else {
          alert(response);
          window.location.href = "/"
          return false
      }
    });

  };

  render() {
    var today = new Date();
    var d = today.getDate();
    var m = today.getMonth() + 1;
    var y = today.getFullYear();
    if (d < 10) {
      d = "0" + d;
    }
    if (m < 10) {
      m = "0" + m;
    }
    today = y + "-" + m + "-" + d;
    return (
      <div>
        <h3>Create New Task</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="belongsTo">*List: </label>
            <select
              name="belongsTo"
              // className="drpdwn"
              onChange={this.handleChange}
              required
            >
              <option value="">Select List</option>
              {this.state.lists.map(val => (
                <option key={val._id} value={val._id}>
                  {val.title}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="task">*Task Name: </label>
            <input
              type="text"
              id="task"
              placeholder="Title"
              name="task"
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="priority">Priority: </label>
            <input
              type="number"
              id="priority"
              placeholder="0"
              name="priority"
              min="0"
              max="5"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="due">Due: </label>
            <input
              type="date"
              id="due"
              name="due"
              min={today}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="description">Details: </label>
            <textarea
              id="description"
              name="details"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">Create Task</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateTask;
