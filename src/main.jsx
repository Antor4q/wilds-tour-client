import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/Root';
import Home from './pages/Home/Home';
import AllSpots from './pages/AllSpots/AllSpots';
import AddSpots from './pages/AddSpots/AddSpots';
import MyList from './pages/MyList/MyList';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Error from './pages/Error/Error';
import ContextProvider from './routes/ContextProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/allSpots",
        element: <AllSpots></AllSpots>
      },
      {
        path: "/addSpots",
        element: <AddSpots></AddSpots>
      },
      {
        path: "/myList",
        element: <MyList></MyList>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ContextProvider>
   <RouterProvider router={router} />
   </ContextProvider>
  </React.StrictMode>,
)
