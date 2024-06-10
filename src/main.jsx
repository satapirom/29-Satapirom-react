import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './assets/components/Home.jsx';
import Owner from './assets/components/Owner.jsx';
import User from './assets/components/User.jsx';
import Admin from './assets/components/Admin.jsx';
import Navbar from './assets/components/Navbar.jsx';
import { useState } from 'react';


const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar><Home /> </Navbar>
      </>
    ),
    // children: [
    //   {
    //     path: '',
    //     element: <Home />,
    //   },

    //   {
    //     path: 'Owner',
    //     element: <Owner />
    //   },

    //   {
    //     path: 'User',
    //     element: <User />
    //   },
    //   {
    //     path: 'Admin',
    //     element: <Admin />
    //   }

    // ]
  },

  {
    path: 'owner',
    element: <Navbar><Owner /></Navbar>
  },
  // {
  //   path: 'user',
  //   element: <Navbar><Home /><User /></Navbar>
  // },
  // {
  //   path: 'admin',
  //   element: <Navbar>
  //     <Home />
  //     <Admin />

  //   </Navbar>
  // },
  // {
  //   path: 'home',
  //   element: <Navbar><Home /></Navbar>
  // },



])


ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
)
