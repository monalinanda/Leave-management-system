import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import LoginPage from "./components/LoginPage";
import Home from "./components/Home";
import LeaveType from "./components/LeaveType";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { StateContext } from "./utils/StateContext";
import useMediaList from "./hooks/useUserLogin";
import NewLeaveForm from "./components/leave/NewLeaveForm";
import LeavLists from "./components/leave/LeavLists";

function App() {
  useMediaList();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/leave-type-list",
      element: <LeaveType />,
    },
    {
      path: "/leave-create-update",
      element: <NewLeaveForm />,
    },
    {
      path: "/leave-list",
      element: <LeavLists />,
    },
  ]);
  return (
    <StateContext>
      <Navbar />
      <div className="sm:flex sm:gap-1 w-screen h-screen">
        <Sidebar />
        <div className="sm:w-[80%]">
          <RouterProvider router={appRouter} />
        </div>
      </div>
    </StateContext>
  );
}

export default App;
