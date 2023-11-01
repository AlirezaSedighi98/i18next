import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.tsx";
import "./styles/index.css";
import "./locale/i18n.ts";
import { I18nextProvider } from "react-i18next";
import i18n from "./locale/i18n.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
