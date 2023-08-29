import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import "../public/css/tailwind.css";
import i18next from './services/i18next'
import { I18nextProvider } from "react-i18next";

import { QueryClient, QueryClientProvider } from 'react-query';


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
  <React.StrictMode>
      <I18nextProvider i18n={i18next}>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
  </QueryClientProvider>
);
