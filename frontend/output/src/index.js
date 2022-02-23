import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material";
import { themeOptions } from "MaterialUITheme";
const theme = themeOptions;
ReactDOM.render(React.createElement(React.StrictMode, null,
    React.createElement(ThemeProvider, { theme: theme },
        React.createElement(CssBaseline, null),
        React.createElement(App, null))), document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
