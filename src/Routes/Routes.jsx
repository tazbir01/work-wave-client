import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Dashboard from "../Layouts/Dashboard";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Employees from "../Pages/Dashboard/Employees/Employees";
import Users from "../Pages/Dashboard/Users/Users";
import EmployeeDetails from "../Pages/Dashboard/EmployeeDetails/EmployeeDetails";
import AllEmployeeList from "../Pages/Dashboard/AllEmployeeList/AllEmployeeList";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import WorkSheet from "../Pages/Dashboard/WorkSheet/WorkSheet";
import AdminRoute from "./PrivateRoute/AdminRoute";
import HrRoute from "./PrivateRoute/HrRoute";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/contact',
        element: <ContactUs></ContactUs>
      }
    ]
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      // for admin
      {
        path:"all-employees",
        element: <AdminRoute><AllEmployeeList></AllEmployeeList></AdminRoute>
      },
      // for HR
      {
        path: "employees",
        element: <HrRoute><Employees></Employees></HrRoute>
      },
      // for employee
      {
        path: "work-sheet",
        element: <WorkSheet></WorkSheet>
      },
      {
        path:"payment-history",
        element: <PaymentHistory></PaymentHistory>
      }
      ,
      {
        path: "users",
        element: <Users></Users>
      },
      {
        path: "employees/details/:id",
        element: <EmployeeDetails></EmployeeDetails>,
        loader: ({params})=>fetch(`https://work-wave-server.vercel.app/users/${params.id}`)
      }
    ]
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/register",
    element: <Register></Register>
  }
]);