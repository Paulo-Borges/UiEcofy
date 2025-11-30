import { Button, useTheme } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAppThemeContext } from "../shared/contexts";

interface IAppRoutes {
  children: React.ReactNode;
}

export const AppRoutes: React.FC<IAppRoutes> = () => {
  const theme = useTheme();

  return (
    <Routes>
      <Route
        path="/pagina-inicial"
        element={<Navigate to="/pagina-inicial" />}
      />

      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};
