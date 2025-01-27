import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import { Login } from "./Components/Login/Login";
import { Signup } from "./Components/Signup/Signup";
import Dashboard from "./Components/Dashboard/Dashboard";
import { About } from "./Components/About/About";
import { Contact } from "./Components/Contact/Contact";
import { Notes } from "./Components/Notes/Notes";

const App = () => {
  const myRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // Render Layout as the main layout
      children: [
        { path: "/", element: <Dashboard /> }, // Default route
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "notes", element: <Notes /> },
        {path: "login", element: <Login />},
        { path: "signup", element: <Signup /> }
      ]
    },
  ]);
  return (
    <div>
      <RouterProvider router={myRoutes} />
    </div>
  );
};

export default App;
