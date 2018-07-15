import React, { Component } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import RegisterPage from './components/Container/RegisterPage';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from "./reducers";
import Home from "./components/Home";
import './App.css';
import LunchOrderPage from './components/Container/LunchOrderPage';
import GroupPage from './components/Container/GroupPage';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#824e2d',
            main: '#522503',
            dark: '#2e0000',
            contrastText: '#fff',
        },
        secondary: {
            light: '#fefefe',
            main: '#cbcbcb',
            dark: '#9a9a9a',
            contrastText: '#000',
        },
    },
});

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <MuiThemeProvider theme={theme}>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/register" component={RegisterPage} />
                            <Route exact path="/lunchOrder" component={LunchOrderPage} />
                            <Route exact path="/groups" component={GroupPage} />
                        </Switch>
                    </BrowserRouter>
                </MuiThemeProvider>
            </Provider>
        );
    }
}

export default App;
