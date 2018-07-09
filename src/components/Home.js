import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

import logo from "../logo.svg";
import "../App.css";

class Home extends Component {
    render() {
        const buttonConfigs = [
            { text: "Register", route: "/register" }, 
            { text: 'Lunch Order', route:"/lunchorder" }, 
            { text: 'Groups', route:"/groups" }, 
        ];
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Agape Missions</h1>
                </header>
                <Grid container justify="center">
                    {
                        buttonConfigs.map(buttonConfig => (
                            <Grid key={buttonConfig.text} item>
                                <Link to={buttonConfig.route}>
                                    <Button>{buttonConfig.text}</Button>
                                </Link>
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        );
    }
}

export default Home;