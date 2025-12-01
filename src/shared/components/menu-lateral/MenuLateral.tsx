import {
  Box,
  Button,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People"; // Para "Customer"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; // Para "Product"
import BarChartIcon from "@mui/icons-material/BarChart"; // Para "Reports"
import SettingsIcon from "@mui/icons-material/Settings"; // Para "Settings"
import HelpCenterIcon from "@mui/icons-material/HelpCenter"; // Para "Help Center"
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export const MenuLateral: React.FC = () => {
  // const theme = useTheme();
  // const drawerWidth = 240;

  interface INavItems {
    text: string;
    icon: React.ReactNode;
  }

  const navItems: INavItems[] = [
    { text: "Dashboard", icon: <DashboardIcon /> },
    { text: "Customer", icon: <PeopleIcon /> },
    { text: "Product", icon: <ShoppingCartIcon /> },
    { text: "Reports", icon: <BarChartIcon /> },
    { text: "Settings", icon: <SettingsIcon /> },
    { text: "Help Center", icon: <HelpCenterIcon /> },
  ];

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
          display: "flex",
          flexDirection: "column",
          width: 240,
          height: "80vh",
          bgcolor: "#ffffff",
          marginTop: 8,
          marginLeft: 2,
          borderRadius: 8,
          paddingBottom: 1,
        }}
      >
        <List>
          {navItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
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
          <Typography sx={{ fontSize: 8 }}>
            Or use <span color="#f68605">invite link</span>
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
          <Box>
            <Typography
              sx={{
                marginBottom: 2,
                bgcolor: "#ffffff",
                padding: 0,
                paddingRight: 1,
                borderRadius: 2,
                marginTop: 4,
                display: { xs: "none", sm: "block" },
                color: "#545454",
              }}
            >
              <IconButton sx={{ color: "#545454" }}>
                <CalendarMonthIcon />
              </IconButton>
              14 Aug 2024, 10:12 AM
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
