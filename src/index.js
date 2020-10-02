import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { create } from "jss";
import rtl from "jss-rtl";
import {
  StylesProvider,
  jssPreset,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import { ReactQueryConfigProvider } from "react-query";

const queryConfig = {
  suspense: true,
};

const theme = createMuiTheme({
  direction: "rtl",
});
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

ReactDOM.render(
  <ReactQueryConfigProvider config={queryConfig}>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <StylesProvider jss={jss}>
          <App />
        </StylesProvider>
      </ThemeProvider>
    </React.StrictMode>
  </ReactQueryConfigProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
