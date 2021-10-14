import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { compose, createStore } from "redux";
import App from "./components/app/App";
import { rootReducer } from "./redux/rootReducer";
import reportWebVitals from "./reportWebVitals";

const store = createStore(
    rootReducer,
    compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals(console.log);
