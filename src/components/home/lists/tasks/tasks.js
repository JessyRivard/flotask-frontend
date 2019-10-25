import React, { Component } from "react";

class Tasks extends Component {

    render () {
        return (
            <div>
                {this.props.tasks.map(task => (
                    <div key={task._id}>
                        <input type="checkbox" id={task._id} name="complete" checked={task.meta.completed} readOnly/>
                        <label onClick={this.props.onSelectTask} htmlFor={task._id}>{task.task}</label>
                    </div>
                ))}
            </div>
        )
    }
}

export default Tasks;