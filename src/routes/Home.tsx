import { Box, IconButton, Stack, Toolbar, Typography } from "@mui/material";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SmallStatistic from "../shared/components/Small_Statistic/SmallStatistic";
import Statistic from "../shared/components/statistic/Statistic";
import HoraExata from "../shared/components/hora_exact/HoraExata";
import TopCategory from "../shared/components/top_category/TopCategory";

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
        <Stack
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
          direction="row"
        >
          <Box>
            <Typography sx={{ marginBottom: 2, color: "#545454" }}>
              Manage and track your business
            </Typography>
            <Typography
              sx={{ marginBottom: 2, fontWeight: "bold", fontSize: 25 }}
            >
              Welcome Back, Marcus
            </Typography>
          </Box>
          <Box
            sx={{
              marginRight: { sm: 0, md: 4 },
            }}
          >
            <Typography
              sx={{
                marginBottom: 2,
                bgcolor: "#ffffff",
                padding: 0,
                paddingRight: 4,
                borderRadius: 2,
                marginTop: 4,
                display: { xs: "none", sm: "flex" },
                alignItems: "center",
                color: "#545454",
              }}
            >
              <IconButton sx={{ color: "#545454" }}>
                <CalendarMonthIcon />
              </IconButton>
              02 Jan 2026, <HoraExata />
            </Typography>
          </Box>
        </Stack>
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
