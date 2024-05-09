import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
    RouterProvider,
  } from "react-router-dom";
import Router from './Routers/Routers.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
        <RouterProvider router={Router} />
        <Toaster />
    </AuthProvider>
  </React.StrictMode>,
)
