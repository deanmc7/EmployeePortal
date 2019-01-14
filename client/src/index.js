import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import EmployeeListPage from "./Page/EmployeeList";
import App from "./Page/App";

import AppNavBar from "./components/AppNavBar";
import NotFound from "./components/NotFound";

import { Provider } from "react-redux";

import * as serviceWorker from "./serviceWorker";

import store from "./store";

const routing = (
    <Provider store={store}>
        <Router>
            <div>
                <AppNavBar />
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/employeelist" component={EmployeeListPage} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    </Provider>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
