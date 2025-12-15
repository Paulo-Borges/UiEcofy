import { Box } from "@mui/material";
import { MenuLateral } from "../shared/components/menu-lateral/MenuLateral";
import { Navbar } from "../shared/components/navbar/Navbar";

function Home() {
  return (
    <Box>
      <Navbar />
      <MenuLateral />
    </Box>
  );
}

export default Home;
