import { Box, Paper, Typography } from "@mui/material";
import { SettingsLanguagesSearch } from "./SettingsLanguagesSearch";

export const SettingsLanguages = () => {
  return (
    <Box
      component={Paper}
      sx={{ marginTop: 3, borderRadius: 5, padding: 3 }}
      id="SettingsLanguages"
    >
      <Box paddingBottom={3}>
        <Typography sx={{ fontWeight: 500 }}>Languages Settings</Typography>
        <Typography sx={{ fontWeight: 100, marginTop: 1 }}>
          Tempor velit at at est mi ut morbi viverra.
        </Typography>
      </Box>
      <Box display="flex" sx={{ paddingY: 5, gap: 5 }}>
        <SettingsLanguagesSearch />
      </Box>
    </Box>
  );
};
