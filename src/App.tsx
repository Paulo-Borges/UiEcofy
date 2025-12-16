import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Navbar } from "./shared/components/navbar/Navbar";
import { MenuLateral } from "./shared/components/menu-lateral/MenuLateral";

const App = () => {
  return (
    <Box>
      <Navbar />

      <Box sx={{ display: "flex" }}>
        <MenuLateral />
        <Outlet />
      </Box>
    </Box>
  );
};

export default App;
