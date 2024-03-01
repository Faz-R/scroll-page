import { RouterProvider, createBrowserRouter } from "react-router-dom";
import TemplatePage from "../Pages/TemplatePage";
import MainPage from "../Pages/MainPage";
import PostPage from "../Pages/PostPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TemplatePage />,

    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "/:id",
        element: <PostPage />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
