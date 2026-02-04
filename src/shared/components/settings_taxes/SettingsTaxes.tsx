import { Box, Paper, Typography } from "@mui/material";

export const SettingsTaxes = () => {
  return (
    <Box
      component={Paper}
      sx={{ marginTop: 3, borderRadius: 5, padding: 3 }}
      id="SettingsTaxes"
    >
      <Box paddingBottom={3}>
        <Typography sx={{ fontWeight: 500, fontSize: 18, marginBottom: 1 }}>
          Tax & Duties
        </Typography>
        <Typography sx={{ fontWeight: 100, fontSize: 14, color: "#545454" }}>
          Manage where you collect taxes and duties. Check with a tax expert if
          you're unsure where you have a tax obligation.
        </Typography>
      </Box>
      <Box display="flex" sx={{ paddingY: 5, gap: 5 }}>
        Aquii...
      </Box>
    </Box>
  );
};
