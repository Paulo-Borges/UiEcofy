import { Box } from "@mui/material";
import { Navbar } from "./src/shared/components/navbar/Navbar";
import { MenuLateral } from "./src/shared/components/menu-lateral/MenuLateral";

const Home = () => {
  return (
    <Box>
      <Navbar />
      <MenuLateral />
    </Box>
  );
};

export default Home;
