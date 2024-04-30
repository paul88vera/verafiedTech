import { Navigate, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import { Home } from "./pages/Home";
import ErrorMessage from "./pages/ErrorMessage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        errorElement: <ErrorMessage />,
        children: [
          {
            index: true,
            element: <Navigate to="/home" />,
          },
          { path: "home", element: <Home /> },
        ],
      },
    ],
  },
]);
