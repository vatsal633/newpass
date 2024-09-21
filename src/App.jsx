import { useState } from "react";
import { createBrowserRouter ,RouterProvider} from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Home from "./componets/home";
import About from "./componets/About";
import Services from "./componets/Services";
import Login from "./componets/login";
import Signup from "./componets/signup";
import Navbar from "./componets/navbar";
import Layout from "./componets/layout";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <Home />
        </Layout>
      ),
    },
    {
      path: "/signup",
      element: (
        <Layout>
          <Signup />
        </Layout>
      ),
    },
    {
      path: "/login",
      element: (
        <Layout>
          <Login />
        </Layout>
      ),
    },
    {
      path: "/about",
      element: (
        <Layout>
          <About />
        </Layout>
      ),
    },
    {
      path: "/services",
      element: (
        <Layout>
          <Services />
        </Layout>
      ),
    },
  ]);
<h1>hello bitvh</h1>
  return <RouterProvider router={router} />;
}

export default App;
