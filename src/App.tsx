import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Layout/LayoutUser/Home";
import LayoutUser from "./components/Layout/LayoutUser/Layout";
import Search from "./components/Search/search";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutUser />,
      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/search",
          element: <Search />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
