import { createBrowserRouter } from "react-router-dom";
import Demo from "../modules/demo/demo";
import React from "react";

const router = createBrowserRouter([
  {
    path: '/demo',
    element: <Demo />
  }
]);

export default router;
