import React, { Component } from "react";
import Tasks from "./tasks/tasks";

class Lists extends Component {


    render () {
        return (
        <div>{this.props.lists.map(list => (<div key={list._id}>
            <h3>{list.title}</h3>
            <Tasks
                tasks={list.tasks}
                onSelectTask={this.props.onSelectTask}
            />
        </div>))}</div>
        )}
}

export default Lists;