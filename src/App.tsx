import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import CreateIndividual from "./pages/CreateIndividual";
import AccountInfoContextProvider from "./context/AccountInfoContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignUpPage />,
    },
    {
      path: "/register",
      element: <CreateIndividual />,
    },
  ]);

  return (
    <AccountInfoContextProvider>
      <RouterProvider router={router} />
    </AccountInfoContextProvider>
  );
}

export default App;
