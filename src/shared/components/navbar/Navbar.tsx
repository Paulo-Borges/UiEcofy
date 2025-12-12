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

export const Navbar: React.FC = () => {
  function HandleSettings() {}

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
              <IconButton>
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
            background: "#ffffff",
            color: "#0e0d0d",
            width: 300,
            height: 200,
            padding: 2,
            borderRadius: 3,
            border: "#e9e1e173 1px solid",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <SettingsOutlinedIcon />
            <Typography>Settings</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <LiveHelpOutlinedIcon />
            <Typography>Help & Support</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <AssignmentReturnOutlinedIcon />
            <Typography>Logout</Typography>
          </Box>
        </Stack>
      </AppBar>
    </>
  );
};
