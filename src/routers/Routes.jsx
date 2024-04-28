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
import TouristSpotDetails from "../components/Private/TouristSpotDetails";
import AllTouristSpot from "../components/layout/AllTouristSpot";
import MyList from "../components/Private/MyList";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://sam-travels-server.vercel.app/touristSpot')
            },
            {
                path: "/addSpot",
                element: <PrivateRoute> <AddSpots></AddSpots> </PrivateRoute>
            },
            {
                path: "/allTouristSpot",
                element: <AllTouristSpot></AllTouristSpot>,
                loader: () => fetch('https://sam-travels-server.vercel.app/touristSpot')
            },
            {
                path: "/myList/:user_email/:user_name",
                element: <PrivateRoute> <MyList></MyList> </PrivateRoute>,
                loader: ({params}) => fetch(`https://sam-travels-server.vercel.app/touristSpot/${params.user_email}/${params.user_name}`)
            },
            {
                path: "/updateSpot/:id",
                element: <PrivateRoute> <UpdateSpots></UpdateSpots> </PrivateRoute>,
                loader: ({params}) => fetch(`https://sam-travels-server.vercel.app/touristSpot/${params.id}`)
            },
            {
                path: "touristSpot/:id",
                element: <PrivateRoute> <TouristSpotDetails></TouristSpotDetails> </PrivateRoute>,
                loader: ({params}) => fetch(`https://sam-travels-server.vercel.app/touristSpot/${params.id}`)
            },
            {
                path: "countries/touriesSpots/:country_Name",
                element: <AllTouristSpot></AllTouristSpot>,
                loader: ({params}) => fetch(`https://sam-travels-server.vercel.app/touristSpot_byCountry/${params.country_Name}`)
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