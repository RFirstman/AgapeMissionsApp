import React, { Component } from "react";
import LunchOrderForm from "../Form/LunchOrderForm";
import { connect } from "react-redux";

import { submitLunchOrder } from "../../reducers/actions";

class LunchOrderPage extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Register</h1>
                </header>
                <LunchOrderForm onSubmit={this.props.onSubmit} />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onSubmit: (values) => dispatch(submitLunchOrder(values))
}); 

export default connect(null, mapDispatchToProps)(LunchOrderPage);