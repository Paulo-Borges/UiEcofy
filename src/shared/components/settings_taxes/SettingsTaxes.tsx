import { Avatar, Box, Divider, Paper, Typography } from "@mui/material";
import { SettingsTaxesForm } from "./SettingsTaxesForm";

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
      <Divider sx={{ marginY: 1 }} />
      <Box
        display="flex"
        justifyContent="space-around"
        sx={{ paddingY: 5, gap: 5 }}
      >
        <Typography>Country or region</Typography>
        <Typography>Collecting</Typography>
        <Typography>Percentage</Typography>
      </Box>
      <Divider sx={{ marginY: 1 }} />

      <Box
        display="flex"
        justifyContent="space-around"
        sx={{ paddingY: 5, gap: 5 }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
          <Avatar
            src="../../src/assets/united states.png"
            sx={{ width: 24, height: 24 }}
          />
          <Typography sx={{ fontWeight: 500, fontSize: 14 }}>
            United States
          </Typography>
        </Box>
        <Typography sx={{ fontWeight: 500, fontSize: 14 }}>Taxes</Typography>
        <Typography sx={{ fontWeight: 500, fontSize: 14 }}>20%</Typography>
      </Box>
      <Divider sx={{ marginY: 1 }} />
      <SettingsTaxesForm />
    </Box>
  );
};
