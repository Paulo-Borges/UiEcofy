import { Box, Link, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { SettingsLinks } from "../shared/components/settings_links/SettingsLinks";
import { SettingsForm } from "../shared/components/settings_links/SettingsForm";

const Settings = () => {
  return (
    <Box sx={{ margin: 7, flexGrow: 1 }}>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography sx={{ marginTop: 7 }}>
            <Box sx={{ fontWeight: 400, fontSize: 24 }}>General Settings</Box>
            <Box sx={{ fontWeight: 100, fontSize: 12 }}>
              Here´s what happening with your store today
            </Box>
          </Typography>
        </Box>
        <Stack sx={{}}>
          <Link
            sx={{
              display: "flex",
              marginTop: 7,
              background: "#F68605",
              color: "#fff",
              padding: 1,
              paddingX: 2,
              borderRadius: 3,
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            <AddIcon /> Add Customer
          </Link>
        </Stack>
      </Stack>
      <SettingsLinks />
      <SettingsForm />
    </Box>
  );
};

export default Settings;
