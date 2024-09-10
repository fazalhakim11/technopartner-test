import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Login from "../pages/login";
import Home from "../pages/home";
import Menu from "../pages/menu"

const index = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Login/>,
        },
        {
            path: "/home",
            element: <Home/> ,
        },
        {
          path: "/menu",
          element: <Menu/>
        }
      ]
    );
    return( 
      <RouterProvider router={router}/>
    )
};

export default index