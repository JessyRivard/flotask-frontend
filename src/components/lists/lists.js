import React, { Component } from "react";
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
        <div>{this.state.lists.map(list => (<p key={list._id}>{list.title}</p>))}</div>
        )}
}

export default Lists;