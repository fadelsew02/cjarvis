

import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Signin from './pages/signin/signin';
import Home from './pages/home/home';
import Dashboard from './pages/Dashboard/dashboard';

import './App.css';




import Layout from "./components/Layout/layout";


const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },{
        path: "add-task",
        Component: Dashboard
      },{
        path: "login",
        Component: Signin
      },
    ],
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} fallbackElement="Chargement..." />
  );
}
