import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// routing
// step1 - import createBrowserRouter
// step3 - import RouterProvider
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

// const styleCard = {
//   backgroundColor: "#f0f0f0"
// }


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/* render the component based on the path */}
      <Outlet />
    </div>
  );
};


// step2 - Configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      }
    ],
    // not found page
    errorElement: <Error />
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
// step4 - Providing App to the RouterProvider
root.render(<RouterProvider router={appRouter}/>);
