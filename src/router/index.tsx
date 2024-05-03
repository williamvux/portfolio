import { createBrowserRouter } from "react-router-dom";
import Profile from "../modules/profile";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Profile />
  }
]);

export default router;
