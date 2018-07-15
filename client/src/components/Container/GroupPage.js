import React, { Component } from "react";
//import { connect } from "react-redux";
import axios from "axios";

class GroupPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            groups: []
        }
    }

    async componentDidMount() {
        let groupRes = await axios.get("/api/groups");
        this.setState({ groups: groupRes.data });
    }

    renderGroups() {
        if (this.state.groups) {
            return this.state.groups.map(group => {
                return (
                    <div>
                        <h2>Group {group.number}</h2>
                        Members:
                        <ul>
                            {group.users.map(user => <li>{user.firstName + " " + user.lastName}</li>)}
                        </ul>
                    </div>
                );
            })
        }
    }

    render() {
        console.log(this.state.groups)
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Groups</h1>
                </header>
                {this.renderGroups()} 
            </div>
        );
    }
}

export default GroupPage;