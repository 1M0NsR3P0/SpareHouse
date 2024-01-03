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
import ContactUs from './NavPages/ContactUs';
import Cart from './NavPages/Cart';
import Checkout from './NavPages/Checkout';
import Product from './Pages/Product';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path:'contact',
        element:<ContactUs/>
      },
      {
        path:'cart',
        element:<Cart/>
      },
      {
        path:'checkout',
        element:<Checkout/>
      },
      {
        path:'product',
        element:<Product/>
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