import {
    createBrowserRouter
} from "react-router-dom";
import Home from '../components/layout/Home';
import Root from "../components/Root";
import AddSpots from "../components/Private/AddSpots";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/touristSpot')
            },
            {
                path: "/addSpot",
                element: <AddSpots></AddSpots>
            }
        ]
    }
]);

export default router;