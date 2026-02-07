import { Box, Paper } from "@mui/material";
import { SettingsSessionColumn } from "./SettingsSessionColumn";
import { SettingsSessionRows } from "./SettingsSessionRows";

export const SettingsSession = () => {
  return (
    <Box
      component={Paper}
      height="60vh"
      sx={{ marginTop: 3, borderRadius: 5, padding: 3 }}
      id="SettingsSession"
    >
      <SettingsSessionColumn />
      <SettingsSessionRows />
    </Box>
  );
};
