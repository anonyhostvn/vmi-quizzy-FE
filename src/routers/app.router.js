import React from 'react';
import {Route} from "react-router-dom";
import HomePage from "../containers/HomPage";
import WorkingSpace from "../containers/WorkingSpace";
import {routerDict} from "./app.router.config";

const QuizzyAppRouter = () => {
    return (
        <div>
            <Route key={routerDict.home} path={routerDict.home} exact={true} component={HomePage}/>

            <Route key={routerDict.work} path={routerDict.work} exact={true} component={WorkingSpace}/>
        </div>
    )
}

export default QuizzyAppRouter;