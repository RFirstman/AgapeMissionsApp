import React, { Component } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import RegisterPage from './components/Container/RegisterPage';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from "redux-thunk";

import reducers from "./reducers";
import Home from "./components/Home";
import './App.css';
import LunchOrderPage from './components/Container/LunchOrderPage';
import GroupPage from './components/Container/GroupPage';
import AdminPage from "./components/Container/AdminPage";

/* const theme = createMuiTheme({
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
}); */

const store = createStore(
    reducers,
    {},
    applyMiddleware(reduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/register" component={RegisterPage} />
                        <Route exact path="/lunchOrder" component={LunchOrderPage} />
                        <Route exact path="/groups" component={GroupPage} />
                        <Route path="/admin" component={AdminPage} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
