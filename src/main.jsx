import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AktivasiContextProvider from "./context/Aktivasi.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AktivasiContextProvider>
      <App />
    </AktivasiContextProvider>
  </React.StrictMode>
);
