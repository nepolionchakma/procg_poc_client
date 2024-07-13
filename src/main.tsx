import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { NavContextProvider } from "./Context/NavContext.tsx";
import { AuthContextProvider } from "./Context/Authcontext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <NavContextProvider>
        <App />
      </NavContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
