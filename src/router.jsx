import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import { Landing } from "./pages/Landing";
import ErrorMessage from "./pages/ErrorMessage";
import Error from "./pages/Error";

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
            element: <Landing />,
          },
          { path: "*", element: <Error /> },
        ],
      },
    ],
  },
]);
