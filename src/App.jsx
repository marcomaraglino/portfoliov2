import './App.css'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Projects from "./pages/projects.jsx";
import Home from "./pages/home.jsx";
import Work from "./pages/work.jsx";
import Social from "./pages/social.jsx";
import Header from "./components/Header.jsx";

const Layout = () => {
  return (
    <div className="w-full px-20 max-md:px-10">
      <Header />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "work",
        element: <Work />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "social",
        element: <Social />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
