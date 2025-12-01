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

export const Navbar: React.FC = () => {
  // const theme = useTheme();

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
              <IconButton>
                <KeyboardArrowDownIcon />
              </IconButton>
            </Box>
          </Stack>
        </Stack>
      </AppBar>
    </>
  );
};
