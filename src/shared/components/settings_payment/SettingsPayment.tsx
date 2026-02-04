import { Box, Button, Paper, Typography } from "@mui/material";
import { SettingsPaymentCards } from "./SettingsPaymentCards";

export const SettingsPayment = () => {
  return (
    <Box
      component={Paper}
      sx={{ marginTop: 3, borderRadius: 5, padding: 3 }}
      id="SettingsPayment"
    >
      <Box paddingBottom={3}>
        <Typography sx={{ fontWeight: 500, fontSize: 18, marginBottom: 1 }}>
          Payment Providers
        </Typography>
        <Typography sx={{ fontWeight: 100, fontSize: 14, color: "#545454" }}>
          These are accepted payment methods in your store.
        </Typography>
      </Box>
      <Box display="flex" sx={{ paddingY: 5, gap: 5 }}>
        <SettingsPaymentCards />
      </Box>
      <Button
        sx={{
          color: "#fff",
          backgroundColor: "#f68605",
          fontSize: 11,
          paddingX: 2,
          fontWeight: 100,
        }}
      >
        Save Change
      </Button>
    </Box>
  );
};
