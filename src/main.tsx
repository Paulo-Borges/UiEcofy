import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { AppThemeProvider } from "./shared/contexts/ThemeContext.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import ErroPage from "./routes/ErroPage.tsx";
import Home from "./routes/Home.tsx";
import Customer from "./routes/Customer.tsx";
import Products from "./routes/Products.tsx";
import Reports from "./routes/Reports.tsx";
import Settings from "./routes/Settings.tsx";
import Help from "./routes/Help.tsx";
import Logout from "./routes/Logout.tsx";
import { Details } from "./routes/Details.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErroPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/customer",
        element: <Customer />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/reports",
        element: <Reports />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
      {
        path: "/details/:id",
        element: <Details />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppThemeProvider>
      <RouterProvider router={router} />
    </AppThemeProvider>
  </StrictMode>
);
