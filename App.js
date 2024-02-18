import React from "react";
import ReactDOM from "react-dom/client";
import { lazy, Suspense } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import { useState, useEffect } from "react";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestroMenu from "./components/RestroMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"));

const ApplayOut = () => {
  const [useName, setuseName] = useState();

  useEffect(() => {
    const data = {
      name: "Mahesh Chavhan",
    };

    setuseName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ LoggedInUser: useName, setuseName }}>
        <div className="shadow-white-50">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <ApplayOut />,
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
            <Grocery />{" "}
          </Suspense>
        ),
      },
      {
        path: "/menu/:resId", //Dynamic menu suing :resId
        element: <RestroMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },

    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
