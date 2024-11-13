import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../components/ErrorPage";
import MainLayout from "../Mainlayout/MainLayout";
import Content from "../Mainlayout/Content";
import Login from "../components/Login";
import Register from "../components/Register";
import RouterCon from "../Mainlayout/RouterCon";
import ReactIcon from "../Mainlayout/ReactIcon";
import Tailwind from "../Mainlayout/Tailwind";
import PrivateRoute from "../Private/PrivateRoute";



const router = createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<MainLayout></MainLayout>,
                children:[
                    {
                        path: '/',
                        element: <Content></Content>
                    },
                    {
                        path:'/react-router',
                        element:<PrivateRoute><RouterCon></RouterCon></PrivateRoute>
                    },
                    {
                        path:'/react-icon',
                        element:<PrivateRoute><ReactIcon></ReactIcon></PrivateRoute>
                    },
                    {
                        path:'/tailwind',
                        element:<PrivateRoute><Tailwind></Tailwind></PrivateRoute>
                    }

                    
                ]
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            }
        ]
    },
   
])

export default router;