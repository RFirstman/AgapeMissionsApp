import React, { Component } from "react";
import LunchOrderForm from "../Form/LunchOrderForm";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";

import { submitLunchOrder } from "../../reducers/actions";

class LunchOrderPage extends Component {
    render() {
        return (
            <div>
                <Row>
                    <header className="App-header">
                        <h1 className="App-title">Lunch Order</h1>
                    </header>
                </Row>
                <Row>
                    <Col md={6} mdOffset={3}>
                        <LunchOrderForm onSubmit={this.props.onSubmit} />
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onSubmit: (values) => dispatch(submitLunchOrder(values))
}); 

export default connect(null, mapDispatchToProps)(LunchOrderPage);