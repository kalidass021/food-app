import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
// routing
// step1 - import createBrowserRouter
// step3 - import RouterProvider
import {createBrowserRouter, RouterProvider} from "react-router-dom";

// const styleCard = {
//   backgroundColor: "#f0f0f0"
// }


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};


// step2 - Configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    // not found page
    errorElement: <Error />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
// step4 - Providing App to the RouterProvider
root.render(<RouterProvider router={appRouter}/>);
