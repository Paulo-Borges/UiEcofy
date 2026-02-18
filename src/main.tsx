import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { AppThemeProvider } from "./shared/contexts/ThemeContext.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import Home from "./routes/Home.tsx";
import Customer from "./routes/Customer.tsx";
import Products from "./routes/Products.tsx";
import Reports from "./routes/Reports.tsx";
import Settings from "./routes/Settings.tsx";
import Help from "./routes/Help.tsx";
import { Details } from "./routes/Details.tsx";
import { UsuarioLogadoProvider } from "./shared/contexts/UsuarioLogado.tsx";
import { AuthLogin } from "./shared/components/login/AuthLogin.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <AuthLogin />,
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
        path: "/details/:id",
        element: <Details />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UsuarioLogadoProvider>
      <AppThemeProvider>
        <RouterProvider router={router} />
      </AppThemeProvider>
    </UsuarioLogadoProvider>
  </StrictMode>,
);
