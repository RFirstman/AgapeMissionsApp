import React, { Component } from "react";
import LunchOrderForm from "../Form/LunchOrderForm";
import { connect } from "react-redux";
import { Row, Col, Grid, Jumbotron } from "react-bootstrap";

import { submitLunchOrder } from "../../reducers/actions";

class LunchOrderPage extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Jumbotron className="App-Jumbotron">
                        <p>Lunch Order</p>
                    </Jumbotron>
                </Row>
                <Row>
                    <Col md={6} mdOffset={3}>
                        <LunchOrderForm onSubmit={this.props.onSubmit} />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onSubmit: (values) => dispatch(submitLunchOrder(values))
}); 

export default connect(null, mapDispatchToProps)(LunchOrderPage);