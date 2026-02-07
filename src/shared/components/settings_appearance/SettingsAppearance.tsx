import { Box, Paper, Typography } from "@mui/material";
import { SettingsAppearanceTheme } from "./SettingsAppearanceTheme";

export const SettingsAppearance = () => {
  return (
    <Box
      component={Paper}
      sx={{
        marginTop: 3,
        borderRadius: 5,
        padding: 3,
        height: { xs: "100vh", sm: "60vh" },
      }}
      id="SettingsAppearance"
    >
      <Box paddingBottom={3}>
        <Typography sx={{ fontWeight: 500 }}>Interface Theme</Typography>
        <Typography sx={{ fontWeight: 100, marginTop: 1 }}>
          Select and customize your UI theme.
        </Typography>
      </Box>
      <Box display="flex" sx={{ paddingY: 5, gap: 5 }}>
        <SettingsAppearanceTheme />
      </Box>
    </Box>
  );
};
