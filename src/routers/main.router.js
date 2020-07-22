import React from 'react';
import {Route} from "react-router-dom";
import {ConnectedRouter} from "connected-react-router";
import {MainRouterDict} from "./main.router.config";
import App from "../containers/QuizzyApp";
import {connect} from "react-redux";

const MainRouter = ({history}) => {
    return (
        <ConnectedRouter history={history}>
            <Route path={MainRouterDict.quizzy}>
                <App/>
            </Route>
        </ConnectedRouter>
    )
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps)(MainRouter);