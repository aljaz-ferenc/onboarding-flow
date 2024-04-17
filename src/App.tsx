import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import CreateIndividual from "./pages/CreateIndividual";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignUpPage />,
    },
    {
      path: "/individual",
      element: <CreateIndividual />,
    },
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App
