import { Box, Typography } from "@mui/material";

export const SettingsTaxesForm = () => {
  return (
    <Box paddingBottom={3} marginTop={3}>
      <Typography sx={{ fontWeight: 500, fontSize: 18, marginBottom: 1 }}>
        Tax Form Review
      </Typography>
      <Typography sx={{ fontWeight: 100, fontSize: 14, color: "#545454" }}>
        Manage where you collect taxes and duties. Check with a tax expert if
        you're unsure where you have a tax obligation.
      </Typography>
    </Box>
  );
};
