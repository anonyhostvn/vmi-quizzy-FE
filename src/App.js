import React from 'react';
import {Provider} from "react-redux";
import {store, history} from "./stores/store";
import MainRouter from "./routers/main.router";

function App() {

    return (
        <Provider store={store}>
            <MainRouter history={history} />
        </Provider>
    );
}

export default App;
