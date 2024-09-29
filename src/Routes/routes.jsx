
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import MainLayout from "../layouts/MainLayout";
import About from "../Pages/About";
import AllProducts from "../Pages/AllProducts";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import Contuct from "../Pages/Contuct";
import Products from "../Pages/Products";
import ErrorPage from "../Pages/ErrorPage";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../Pages/DashboardPages/Dashboard";
import AddProduct from "../Pages/DashboardPages/AddProduct";
import ProductsList from "../Pages/DashboardPages/ProducstList";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement:<ErrorPage/>,
      children: [
        {
          path: "/",
          element:<Home/>
        },
        {
          path: "/about",
          element:<About/>
        },
        {
          path: "/allproducts",
          element:<AllProducts/>
        },
        {
          path: "/products",
          element:<Products/>
        },
        {
          path: "/login",
          element:<Login/>
        },
        {
          path: "/registration",
          element:<Registration/>
        },
        {
          path: "/contuct",
          element:<Contuct/>
        },
      ]
    },
    {
      path: "dashboard",
      element:<DashboardLayout/>,
      errorElement:<ErrorPage/>,
      children: [
        {
          path: "",
          element:<Dashboard/>
        
        },
        {
          path: "dashboard/addproduct",
          element:<AddProduct/>
        },
        {
          path: "dashboard/productlist",
          element:<ProductsList/>

        },
      ],
    },
  ]);