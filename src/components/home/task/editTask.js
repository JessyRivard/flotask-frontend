import React, { Component } from "react";
import api from "../../../api";

class EditTask extends Component {
  state = {
    lists: [],
    _id: "",
    task: "",
    details: "",
    // due: null,
    priority: "",
    belongsTo: "",
    errorOccured: false,
    errorMessage: ""
  };

  componentDidMount() {
    this.callLists();
    this.setState(() => {
      return {
        _id: this.props.task._id,
        task: this.props.task.task,
        details: this.props.task.details,
        // due: this.props.task.due,
        priority: this.props.task.priority,
        list: this.props.task.belongsTo,
        belongsTo: this.props.task.meta.belongsTo
      }
    })
  }

  componentDidCatch() {
    window.location.href = "/"

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

    var updatedTask = {
      _id: this.state._id,
      task: this.state.task,
      details: this.state.details,
      // due: this.state.due,
      priority: this.state.priority,
      list: this.state.belongsTo
    };
    api.updateTask(updatedTask).then(response => {
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
    if(!this.props.task){window.location.href = "/"}
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
        <h3>Edit Task</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="belongsTo">*List: </label>
            <select
              name="belongsTo"
              // className="drpdwn"
              value={this.state.belongsTo}
              onChange={this.handleChange}
              required
            >
              <option >Select List</option>
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
              value={this.state.task}
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
              value={this.state.priority}
              onChange={this.handleChange}
            />
          </div>
          {/* <div>
            <label htmlFor="due">Due: </label>
            <input
              type="date"
              id="due"
              name="due"
              value={this.state.due}
              min={today}
              onChange={this.handleChange}
            />
          </div> */}
          <div>
            <label htmlFor="description">Details: </label>
            <textarea
              id="description"
              name="details"
              value={this.state.details}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">Save Changes</button>
          </div>
        </form>
      </div>
    );
  }
}

export default EditTask;
