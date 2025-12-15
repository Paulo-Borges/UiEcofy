import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Home from "./routes/Home";

const App = () => {
  return (
    <Box>
      <Home />
      <Outlet />
    </Box>
  );
};

export default App;
