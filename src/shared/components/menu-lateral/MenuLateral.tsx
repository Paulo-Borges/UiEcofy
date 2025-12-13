import {
  Box,
  CssBaseline,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SmallStatistic from "../Small_Statistic/SmallStatistic";
import Statistic from "../statistic/Statistic";
import HoraExata from "../hora_exact/HoraExata";

export const MenuLateral: React.FC = () => {
  interface INavItems {
    id: number;
    text: string;
    icon: React.ReactNode;
  }

  const navItems: INavItems[] = [
    { id: 1, text: "Dashboard", icon: <DashboardIcon /> },
    { id: 2, text: "Customer", icon: <PeopleIcon /> },
    { id: 3, text: "Product", icon: <ShoppingCartIcon /> },
    { id: 4, text: "Reports", icon: <BarChartIcon /> },
    { id: 5, text: "Settings", icon: <SettingsIcon /> },
    { id: 6, text: "Help Center", icon: <HelpCenterIcon /> },
  ];

  const activeItemText = "Dashboard";

  return (
    <Box
      sx={{
        display: "flex",
        marginTop: 2,
      }}
    >
      <CssBaseline />
      <Toolbar
        sx={{
          flexDirection: "column",
          width: 240,
          height: "80vh",
          bgcolor: "#ffffff",
          marginTop: 8,
          marginLeft: 2,
          borderRadius: 8,
          paddingBottom: 1,
          display: { xs: "none", sm: "flex" },
        }}
      >
        <List>
          {navItems.map((item) => {
            const isDashboard = item.text === activeItemText;

            return (
              <ListItem
                key={item.text}
                disablePadding
                sx={{
                  bgcolor: isDashboard ? "#f68605" : "transparent",
                  color: isDashboard ? "#ffffff" : "inherit",
                  borderRadius: isDashboard ? 4 : 0,
                  marginBottom: 2,
                }}
              >
                <ListItemButton sx={{}}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
        <Box sx={{ flexGrow: 1 }}></Box>
        <Stack
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 190,
            height: 120,
            bgcolor: "#f8f8f8",
          }}
          direction="column"
        >
          <IconButton sx={{ color: "#f68605" }}>
            <AddCircleRoundedIcon />
          </IconButton>
          <Typography sx={{ fontWeight: "semiBold", fontSize: 12 }}>
            Add New Product
          </Typography>
          <Typography
            sx={{ fontSize: 8, display: "flex", textAlign: "center" }}
          >
            Or use
            <Link
              href="https://github.com/Paulo-Borges"
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              color="#f68605"
            >
              invite link
            </Link>
          </Typography>
        </Stack>
      </Toolbar>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
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
                paddingRight: 1,
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
              13 Dez 2025, <HoraExata />
            </Typography>
          </Box>
        </Stack>
        <SmallStatistic />
        <Statistic />
      </Box>
    </Box>
  );
};
