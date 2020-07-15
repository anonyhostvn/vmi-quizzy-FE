import React from 'react';
import WorkingSpace from "./containers/WorkingSpace";
import {Provider} from "react-redux";
import {store} from "./stores/store";

function App() {

    return (
        <div>
            <Provider store={store}>
                <WorkingSpace/>
            </Provider>
        </div>
    );
}

export default App;
