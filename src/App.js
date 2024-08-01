import { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
//import Grocery from "./components/Grocery";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// lazy loading or chunking
// the lazy function should return the import function
const Grocery = lazy(() => import("./components/Grocery"));
// redux
// import Provider and store
import { Provider } from "react-redux";
import appStore from "./redux/appStore";

// routing
// step1 - import createBrowserRouter
// step3 - import RouterProvider
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// import user context
import UserContext from "./utils/UserContext";
import Cart from "./components/Cart";

// const styleCard = {
//   backgroundColor: "#f0f0f0"
// }

const AppLayout = () => {
  const [userName, setUserName] = useState();

  // authentication
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "Kalidass Boopathi",
    };
    setUserName(data.name);
  }, []);
  return (
    // Step2. Providing the redux store to application
    <Provider store={appStore}>
      {/* providing data to parent component */}
      <UserContext.Provider value={{ loggedInuser: userName, setUserName }}>
        <div className="app">
          <Header />
          {/* render the component based on the path */}
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
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
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    // not found page
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
// step4 - Providing App to the RouterProvider
root.render(<RouterProvider router={appRouter} />);
