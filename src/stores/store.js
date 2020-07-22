import {applyMiddleware, combineReducers, createStore} from "redux";
import {createBrowserHistory} from "history";
import {connectRouter, routerMiddleware} from "connected-react-router";
import thunk from "redux-thunk";
import reducers from "./reducers";
import logger from "redux-logger";
import {createEpicMiddleware} from "redux-observable";
import {rootEpics} from "./rootEpics";
import {composeWithDevTools} from "redux-devtools-extension";

const history = createBrowserHistory();
const routeMiddleware = routerMiddleware(history);
const epicMiddleware = createEpicMiddleware();

let middleware = [];
if (process.env.NODE_ENV === 'development') {
    middleware = [logger, thunk, routeMiddleware, epicMiddleware];
} else {
    middleware = [thunk, routeMiddleware, epicMiddleware];
}

const store = createStore(
    combineReducers({
        ...reducers,
        router: connectRouter(history),
    }),
    {},
    composeWithDevTools(applyMiddleware(...middleware))
);
epicMiddleware.run(rootEpics);
export {store, history};
