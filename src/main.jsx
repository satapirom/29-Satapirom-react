import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './assets/components/Home.jsx';
import Owner from './assets/components/Owner.jsx';
import User from './assets/components/User.jsx';




const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      path: 'Navbar',
      element: <Home />,
    },

    {
      path: 'Owner',
      element: <Owner />
    },

    {
      path: 'Home',
      element: <Home />
    },
    {
      path: 'Home',
      element: <User />
    }

  ]
}])


ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
)
