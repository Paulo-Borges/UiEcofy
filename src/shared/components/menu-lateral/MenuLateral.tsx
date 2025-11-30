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
        <Typography sx={{ marginBottom: 2 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    </Box>
  );
};
