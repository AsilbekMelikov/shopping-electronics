import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import {Provider} from "react-redux";
import store from "./Redux/Store";
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist";

const root = ReactDOM.createRoot(document.getElementById("root"));

let persistor = persistStore(store)

root.render(
  <Router>
    <Provider store={store} >
       <PersistGate persistor={persistor}>
           <App />
       </PersistGate>
    </Provider>
  </Router>
);
