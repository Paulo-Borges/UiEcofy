import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppThemeProvider } from "./shared/contexts/ThemeContext.tsx";
import { BrowserRouter } from "react-router-dom";
import Home from "../Home.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppThemeProvider>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </AppThemeProvider>
  </StrictMode>
);
