import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
import PostsTest from "./pages/PostsTest";
import CommentsTest from "./pages/CommentsTest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <App />,
  },
  { path: "comments/:id", element: <App /> },
  { path: "posts/test", element: <PostsTest /> },
  { path: "comments/test", element: <CommentsTest /> },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </React.StrictMode>
);

reportWebVitals();
