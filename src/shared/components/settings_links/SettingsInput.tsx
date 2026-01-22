import { Box, FormControl, TextField, Typography } from "@mui/material";

export const SettingsInput = () => {
  return (
    <FormControl>
      <Box display="flex" gap={2} justifyContent="space-between" width="100%">
        <Box>
          <Typography sx={{ marginBottom: 2 }}>First Name</Typography>
          <TextField
            variant="outlined"
            placeholder="Digite seu nome"
            sx={{ width: "30vw" }}
          />

          <Typography sx={{ marginBottom: 2, marginTop: 2 }}>Email</Typography>
          <TextField
            variant="outlined"
            placeholder="Digite seu email"
            sx={{ width: "30vw" }}
          />

          <Typography sx={{ marginBottom: 2, marginTop: 2 }}>
            Country or Region
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Digite sua região"
            sx={{ width: "30vw" }}
          />

          <Typography sx={{ marginBottom: 2, marginTop: 2 }}>
            Address
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Digite seu Address"
            sx={{ width: "30vw" }}
          />
        </Box>

        <Box>
          <Typography sx={{ marginBottom: 2 }}>Last Name</Typography>
          <TextField
            variant="outlined"
            placeholder="Digite seu sobrenome"
            sx={{ width: "30vw" }}
          />

          <Typography sx={{ marginBottom: 2, marginTop: 2 }}>
            Phone Number(optional)
          </Typography>

          <TextField
            variant="outlined"
            placeholder="Digite seu Phone"
            sx={{ width: "30vw" }}
          />

          <Typography sx={{ marginBottom: 2, marginTop: 2 }}>City</Typography>
          <TextField
            variant="outlined"
            placeholder="Digite sua cidade"
            sx={{ width: "30vw" }}
          />

          <Typography sx={{ marginBottom: 2, marginTop: 2 }}>
            Postal Code
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Digite seu Codigo postal"
            sx={{ width: "30vw" }}
          />
        </Box>
      </Box>
    </FormControl>
  );
};
