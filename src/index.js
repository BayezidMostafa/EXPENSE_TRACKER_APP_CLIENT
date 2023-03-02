import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AuthContext from "./Context/AuthContext";
import GlobalStateContext from "./Context/GlobalStateContext";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  offset: 100,
  duration: 500,
  easing: "ease-out-cubic",
});

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
