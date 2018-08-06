import React, { Component } from "react";
import { Button, Col, Panel } from "react-bootstrap";

import FormWrapper from "./FormWrapper";
import listField from "./listField";

class CreateGroupForm extends Component {
    constructor(props) {
        super(props);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleJobSiteChange = this.handleJobSiteChange.bind(this);
        this.state = {
            selectedUsers: [],  // contains names of selected users
            selectedUserIndices: [], // contains indices of selected users
            selectedJobSites: [],
            selectedSiteIndices: []
        }
    }

    toggleActive(prevIndices, index) {
        if (prevIndices.includes(index)) {
            return prevIndices.filter(i => i !== index);
        }
        return [...prevIndices, index];
    }

    toggleSelected(items, indices) {
        let result = []
        items.forEach((item, index) => {
            if (indices.includes(index)) {
                result.push(item.text)
            }
        })
        return result;
    }

    handleUserChange(index) {
        let prevIndices = this.state.selectedUserIndices;
        let selectedUserIndices = this.toggleActive(prevIndices, index);
        let selectedUsers = this.toggleSelected(this.props.users, selectedUserIndices);

        this.setState({
            selectedUserIndices,
            selectedUsers
        });
    }

    handleJobSiteChange(index) {
        let prevIndices = this.state.selectedSiteIndices;
        let selectedSiteIndices = this.toggleActive(prevIndices, index);
        let selectedJobSites = this.toggleSelected(this.props.jobSites, selectedSiteIndices);

        this.setState({
            selectedSiteIndices,
            selectedJobSites
        });
    }

    renderSelected(items, heading) {
        return (
            <Panel bsStyle="info">
                <Panel.Heading>{heading}</Panel.Heading>
                <Panel.Body>
                    {items.map((text, index) => (
                        <Col key={index} md={4}>
                            {text}
                        </Col>
                    ))}
                </Panel.Body>
            </Panel>
        );
    }

    render() {
        let { users, jobSites, handleSubmit } = this.props;
        
        const onSubmit = () => {
            let userIds = []
            this.props.users.map((user, index) => {
                if (this.state.selectedUserIndices.includes(index)) {
                    userIds.push(user._id);
                }
            })
            let jobSiteIds = []
            this.props.jobSites.map((jobSite, index) => {
                if (this.state.selectedSiteIndices.includes(index)) {
                    jobSiteIds.push(jobSite._id)
                }
            });
            handleSubmit(userIds, jobSiteIds);
        }
        return (
            <form>
                {listField({
                    items: users,
                    onSelect: this.handleUserChange,
                    selectedIndices: this.state.selectedUserIndices
                })}
                {this.renderSelected(this.state.selectedUsers, "Selected Users")}
                {listField({
                    items: jobSites,
                    onSelect: this.handleJobSiteChange,
                    selectedIndices: this.state.selectedSiteIndices
                })}
                {this.renderSelected(this.state.selectedJobSites, "Selected Job Sites")}
                <Button onClick={onSubmit}>Submit</Button>
            </form>
        )
    }
}


export default FormWrapper((CreateGroupForm), "Create Group");