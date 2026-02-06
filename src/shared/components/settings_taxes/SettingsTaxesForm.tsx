import { Box, TextField, Typography } from "@mui/material";

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

      <Box sx={{ display: "flex", gap: 10, marginTop: 3 }}>
        <Box>
          <Typography sx={{ marginTop: 6, marginBottom: 3 }}>Name</Typography>
          <TextField
            variant="outlined"
            placeholder="Digite seu nome"
            sx={{ width: "30vw" }}
          />

          <Typography sx={{ marginTop: 6, marginBottom: 3 }}>
            Mailing address
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Digite seu endereço"
            sx={{ width: "30vw" }}
          />
        </Box>

        <Box>
          <Typography sx={{ marginTop: 6, marginBottom: 3 }}>
            Permanent residence
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Digite seu nome"
            sx={{ width: "30vw" }}
          />

          <Typography sx={{ marginTop: 6, marginBottom: 3 }}>
            Treaty country
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Digite seu endereço"
            sx={{ width: "30vw" }}
          />
        </Box>
      </Box>
    </Box>
  );
};
