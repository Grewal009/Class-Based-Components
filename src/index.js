import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";



import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const About = lazy(()=>import("./components/About"));
const Contact = lazy(()=>import("./components/Contact"));

const AppLayout = () => {
    return(
        <div>
            <Header />
            <Outlet />
        </div>
    );
}

const appRoute = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout />,
        errorElement : <Error />,
        children : [{
            path : "/",
            element : <Body />,
         },
            {
            path : "/about",
            element : <Suspense fallback={<h1>loading...</h1>}><About /></Suspense>,
         },
         {
            path : "/contact",
            element : <Suspense fallback={<h1>loading component...</h1>}><Contact /></Suspense>,
         }
         ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
