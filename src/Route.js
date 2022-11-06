import React from "react";
import { Redirect, Switch, Route, Router } from "react-router-dom";
import RouteGuard from "./components/RouteGuard"

//pages
import HomePage from "./pages/admin"
import LoginPage from "./pages/home"

function Routes() {
    return (
        <Router history={history}>
            <Switch>
                <RouteGuard
                    exact
                    path="/"
                    component={HomePage}
                />
                <Route
                    path="/login"
                    component={LoginPage}
                />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
}

export default Routes