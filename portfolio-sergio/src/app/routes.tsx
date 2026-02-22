import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "*",
    element: <div className="flex items-center justify-center h-screen">404 - Not Found</div>,
  }
]);
