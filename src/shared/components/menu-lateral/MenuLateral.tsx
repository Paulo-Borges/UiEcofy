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

import { NavLink } from "react-router-dom";

export const MenuLateral: React.FC = () => {
  interface INavItems {
    id: number;
    text: string;
    icon: React.ReactNode;
    path: string;
  }

  const navItems: INavItems[] = [
    { id: 1, text: "Dashboard", icon: <DashboardIcon />, path: "/" },
    { id: 2, text: "Customer", icon: <PeopleIcon />, path: "/customer" },
    { id: 3, text: "Product", icon: <ShoppingCartIcon />, path: "/products" },
    { id: 4, text: "Reports", icon: <BarChartIcon />, path: "/reports" },
    { id: 5, text: "Settings", icon: <SettingsIcon />, path: "/settings" },
    { id: 6, text: "Help Center", icon: <HelpCenterIcon />, path: "/help" },
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
            return (
              <ListItem
                key={item.text}
                disablePadding
                sx={{
                  marginBottom: 2,
                }}
              >
                <ListItemButton
                  component={NavLink}
                  to={item.path}
                  sx={{
                    "&.active": {
                      // Quando o NavLink estiver ativo (URL corresponde)
                      bgcolor: "#f68605",
                      color: "#ffffff",
                      borderRadius: 4,
                    },
                    color: "inherit",
                    borderRadius: 4,
                  }}
                >
                  <ListItemIcon sx={{ color: "inherit" }}>
                    {item.icon}
                  </ListItemIcon>
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
    </Box>
  );
};
