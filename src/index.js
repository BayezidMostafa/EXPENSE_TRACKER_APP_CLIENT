import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AuthContext from "./Context/AuthContext";
import GlobalStateContext from "./Context/GlobalStateContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";

AOS.init({
  offset: 100,
  duration: 500,
  easing: "ease-out-cubic",
});

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContext>
        <GlobalStateContext>
          <Toaster position="top-right" />
          <App />
        </GlobalStateContext>
      </AuthContext>
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
