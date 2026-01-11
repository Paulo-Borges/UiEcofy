import { Box, Toolbar } from "@mui/material";

import SmallStatistic from "../shared/components/Small_Statistic/SmallStatistic";
import Statistic from "../shared/components/statistic/Statistic";
import TopCategory from "../shared/components/top_category/TopCategory";
import { HomeBase } from "../shared/components/home_base/HomeBase";

function Home() {
  return (
    <Box>
      <Box
        // component="main"
        sx={{
          // flexGrow: 1,
          bgcolor: "background.default",
          p: 3,
        }}
      >
        <Toolbar />
        <HomeBase titulo="Welcome Back, Marcus" />
        <SmallStatistic />
      </Box>
      <Box sx={{ padding: 5, gap: 5, display: { sm: "block", md: "flex" } }}>
        <Statistic />

        <TopCategory />
      </Box>
    </Box>
  );
}

export default Home;
