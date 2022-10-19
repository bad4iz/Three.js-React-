import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import App2 from "./App2";
import App3 from "./App3";
import { MementoMori } from "./MementoMori";
import reportWebVitals from "./reportWebVitals";
import { ErrorPage } from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/2",
    element: <App2 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/3",
    element: <App3 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/memento-mori",
    element: <MementoMori />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
