import React from 'react';
import {Provider} from "react-redux";
import {store} from "./stores/store";
import QuizzyApp from "./containers/App";

function App() {

    return (
        <Provider store={store}>
            <QuizzyApp/>
        </Provider>
    );
}

export default App;
