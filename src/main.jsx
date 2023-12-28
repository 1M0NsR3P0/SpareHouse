import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import AuthContxt from './authoProvider/AuthProvider';
import Home from './Home/Home';
import Main from './Home/Main';
import Error from './Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
    ]
  },
  ,
  {
    path: '/*',
    element: <Error />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContxt>
      <RouterProvider router={router} />
    </AuthContxt>
  </React.StrictMode>
);