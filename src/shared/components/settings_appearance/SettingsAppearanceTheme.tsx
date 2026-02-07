import { Avatar, Box, Typography } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

export const SettingsAppearanceTheme = () => {
  return (
    <Box display={{ xs: "block", sm: "flex" }} gap={{ xs: 0, sm: 5 }}>
      <Box
        sx={{
          border: "1px solid #e0e0e0",
          width: 250,
          height: 240,
          borderRadius: 4,
          marginBottom: { xs: 3, sm: 0 },
        }}
      >
        <Avatar
          variant="square"
          src="../src/assets/Frame 1677.png"
          sx={{ width: "100%", height: "80%" }}
        />
        <Box sx={{ display: "flex", gap: 2, paddingTop: 2, paddingLeft: 2 }}>
          <Box sx={{ "& svg": { color: "#f68605" } }}>
            <CheckBoxIcon />
          </Box>
          <Typography>Light mode</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          border: "1px solid #e0e0e0",
          width: 250,
          height: 240,
          borderRadius: 4,
        }}
      >
        <Avatar
          variant="square"
          src="../src/assets/Frame 1678.png"
          sx={{ width: "100%", height: "80%" }}
        />
        <Box sx={{ display: "flex", gap: 2, paddingTop: 2, paddingLeft: 2 }}>
          <CheckBoxIcon />
          <Typography>Dark mode</Typography>
        </Box>
      </Box>
    </Box>
  );
};
