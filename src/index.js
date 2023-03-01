import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AuthContext from "./Context/AuthContext";
import GlobalStateContext from "./Context/GlobalStateContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContext>
      <GlobalStateContext>
        <App />
      </GlobalStateContext>
    </AuthContext>
  </React.StrictMode>
);

reportWebVitals();
