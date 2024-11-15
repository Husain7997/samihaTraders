
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
import EditProduct from "../Components/dashboard/EditProduct";
// import SingleProduct from "../Components/SingleProduct";
import SingleProductCardDashboard from "../Components/dashboard/SingleProductCardDashboard";
import POSInterface from "../Pages/DashboardPages/POSInterface";
import ExpensesList from "../Pages/DashboardPages/Expenses/ExpensesList";
import ExpensesCategory from "../Pages/DashboardPages/Expenses/ExpensesCategory";
import CreateExpenses from "../Pages/DashboardPages/Expenses/CreateExpenses";
import CreateSale from "../Pages/DashboardPages/Sales/CreateSale";
import SalesList from "../Pages/DashboardPages/Sales/SalesList";
import ShipmentList from "../Pages/DashboardPages/Sales/ShipmentList";
import SalesReturnList from "../Pages/DashboardPages/Sales/SalesReturnList";
import CustomerList from "../Pages/DashboardPages/people/CustomerList";
import UserList from "../Pages/DashboardPages/people/UserList";
// import EditProducts from "../Pages/DashboardPages/EditProducts";


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
          path: "dashboard/POSInterface",
          element:<POSInterface/>
        },
        {
          path: "dashboard/CreateExpenses",
          element:<CreateExpenses/>
        },
        {
          path: "dashboard/ExpensesList",
          element:<ExpensesList/>
        },
        {
          path: "dashboard/ExpensesCategory",
          element:<ExpensesCategory/>
        },
        {
          path: "dashboard/CreateSale",
          element:<CreateSale/>
        },
        {
          path: "dashboard/SalesList",
          element:<SalesList/>
        },
        {
          path: "dashboard/ShipmentList",
          element:<ShipmentList/>
        },
        {
          path: "dashboard/SalesReturnList",
          element:<SalesReturnList/>
        },
        {
          path: "dashboard/CustomerList",
          element:<CustomerList/>
        },
        {
          path: "dashboard/UserList",
          element:<UserList/>
        },


        {
          path: "dashboard/productlist",
          element:<ProductsList/>,
          loader: () => fetch(`http://localhost:5000/products`) 

        },
        {
          path: "dashboard/productlist",
          element:<EditProduct/>,
          loader: () => fetch(`http://localhost:5000/products`) 

        },
        {
          path: "/dashboard/editProduct/:id",
          element:<EditProduct/>,
          loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`) 

        },
        {
          path: "/dashboard/SingleProductCardDashboard/:id",
          element:<SingleProductCardDashboard/>,
          loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`) 

        },
      ],
    },
  ]);