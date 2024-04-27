import {
    createBrowserRouter
} from "react-router-dom";
import Home from '../components/layout/Home';
import Root from "../components/Root";
import AddSpots from "../components/Private/AddSpots";
import UpdateSpots from "../components/Private/UpdateSpots";
import LogIn from "../components/Authentication/LogIn";
import SignUp from "../components/Authentication/SignUp";
import PrivateRoute from "./PrivateRoute";
import Error from "../components/error/Error";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/touristSpot')
            },
            {
                path: "/addSpot",
                element: <PrivateRoute> <AddSpots></AddSpots> </PrivateRoute>
            },
            {
                path: "/updateSpot/:id",
                element: <PrivateRoute> <UpdateSpots></UpdateSpots> </PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/touristSpot/${params.id}`)
            },
            {
                path: "/logIn",
                element: <LogIn></LogIn>
            },
            {
                path: "/signUp",
                element: <SignUp></SignUp>
            }
        ]
    }
]);

export default router;