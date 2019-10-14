import React, { Component } from "react";
import Tasks from "./tasks/tasks";
import * as api from "../../api";

class Lists extends Component {
    state = {
        lists: [],
        errorOccured: false,
        errorMessage: ""
    };

    componentDidMount() {
        this.callLists();
    }

    callLists = () => {
        api.fetchLists()
        .then(response => {
            this.setState(() => {
                return {
                    lists: response
                }
            })
        })
    };

    render () {
        return (
        <div>{this.state.lists.map(list => (<div key={list._id}>
            <h3>{list.title}</h3>
            <Tasks
                tasks={list.tasks}
            />
        </div>))}</div>
        )}
}

export default Lists;