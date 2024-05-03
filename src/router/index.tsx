import { createBrowserRouter } from "react-router-dom";
import Demo from "../modules/demo";

const router = createBrowserRouter([
  {
    path: '/demo',
    element: <Demo />
  }
]);

export default router;
