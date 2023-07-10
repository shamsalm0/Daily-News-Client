import { createBrowserRouter } from "react-router-dom";
import Main from "./components/Main/Main";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import News from "./components/Pages/News/News";
import SignIn from "./components/Pages/SIgnIn/SignIn";
import SignUp from "./components/Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router=createBrowserRouter([
    {
     path:'/',
     element:<Main></Main>,
     children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('http://localhost:9000/news')
        },
        {
            path:'/category/:id',
            element:<Category></Category>,
            loader:({params})=>fetch(`http://localhost:9000/category/${params.id}`)
        },
        {
            path:'/news/:id',
            element:<PrivateRoute><News></News></PrivateRoute>,
            loader:({params})=>fetch(`http://localhost:9000/news/${params.id}`)
        },
        {
            path:'/signin',
            element:<SignIn></SignIn>
        },
        {
            path:'/signup',
            element:<SignUp></SignUp>
        }
     ] 
    }
])