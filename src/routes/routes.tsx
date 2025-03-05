import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import App from '../App'
import Collection from "../pages/Collection/Collection";
import DetailViewItem from "../pages/DetailViewItem/DetailViewItem";
import CartPage from "../pages/Cart/Cart";

export const route = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:"/collection/:collectionName",
                element:<Collection/>
            },
            {
                path:"/collection/:collectionName/:itemId",
                element:<DetailViewItem/>
            },
            {
                path:"/cart",
                element:<CartPage/>
            }
        ]
    }
]
);



