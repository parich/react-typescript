import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./global.css";
import router from "./routes/root";
import { Provider } from "react-redux";
import { store } from "./reduxToolkit/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <Provider store={store}>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </Provider>
  // </React.StrictMode>
);
