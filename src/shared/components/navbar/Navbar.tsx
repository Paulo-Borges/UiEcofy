import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LiveHelpOutlinedIcon from "@mui/icons-material/LiveHelpOutlined";
import AssignmentReturnOutlinedIcon from "@mui/icons-material/AssignmentReturnOutlined";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Navbar: React.FC = () => {
  const [visivel, setVisivel] = useState(false);

  function HandleSettings() {
    setVisivel(!visivel);
  }

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          zIndex: 9999,
          height: 70,
          backgroundColor: "#ffffff",
          display: "flex",
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{ justifyContent: "space-between" }}
        >
          <Box
            sx={{
              display: "flex",
              padding: 2,
              gap: 1,
              alignItems: "center",
            }}
          >
            <Avatar
              alt="logo do Ecofy"
              src="./src/assets/Group.svg"
              variant="square"
            ></Avatar>
            <Typography
              color="secondary"
              variant="h6"
              sx={{ fontWeight: "bold" }}
            >
              ECOFY
            </Typography>
          </Box>
          <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
            <Box>
              <IconButton onClick={HandleSettings}>
                <SearchIcon />
              </IconButton>
              <IconButton>
                <EmailOutlinedIcon />
              </IconButton>
              <IconButton>
                <NotificationsOutlinedIcon />
              </IconButton>
            </Box>
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                padding: 2,
                gap: 1,
                alignItems: "center",
              }}
            >
              <Avatar
                alt="photo de marcus"
                src="./src/assets/profile.png"
              ></Avatar>
              <Box>
                <Typography color="secondary" variant="h6">
                  Marcus Orlando
                </Typography>
                <Typography color="secondary" sx={{ fontSize: 10 }}>
                  marcusorlando@gmail.com
                </Typography>
              </Box>
              <IconButton onClick={HandleSettings}>
                <KeyboardArrowDownIcon />
              </IconButton>
            </Box>
          </Stack>
        </Stack>
        <Stack
          sx={{
            display: visivel ? "flex" : "none",
            background: "#ffffff",
            position: "absolute",
            top: 70,
            right: 10,
            color: "#0e0d0d",
            width: 300,
            height: 200,
            padding: 2,
            borderRadius: 3,
            border: "#e9e1e173 1px solid",
          }}
        >
          <Box
            component={NavLink}
            to="/settings"
            sx={{
              display: "flex",
              textDecoration: "none",
              color: "#0e0d0d",
              padding: 0,
              justifyContent: "flex-start",
              gap: 2,
              marginBottom: 3,
            }}
          >
            <SettingsOutlinedIcon />
            <Typography>Settings</Typography>
          </Box>
          <Box
            component={NavLink}
            to="/help"
            sx={{
              display: "flex",
              textDecoration: "none",
              color: "#0e0d0d",
              padding: 0,
              justifyContent: "flex-start",
              gap: 2,
              marginBottom: 3,
            }}
          >
            <LiveHelpOutlinedIcon />
            <Typography>Help & Support</Typography>
          </Box>
          <Box
            component={NavLink}
            to="/Logout"
            sx={{
              display: "flex",
              textDecoration: "none",
              color: "#0e0d0d",
              padding: 0,
              justifyContent: "flex-start",
              gap: 2,
              marginBottom: 3,
            }}
          >
            <AssignmentReturnOutlinedIcon />
            <Typography>Logout</Typography>
          </Box>
        </Stack>
      </AppBar>
    </>
  );
};
