import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ProductsProvider } from "./contexts/ProductsContext";
import { ThemeProvider } from "./contexts/ThemeContext";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
