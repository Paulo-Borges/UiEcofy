import { Box, FormControl, TextField, Typography } from "@mui/material";

export const SettingsInput = () => {
  const onPegar = (e) => {
    e.preventDefault();

    const data = {
      firstName: e.target.elements.firstName.value,
      email: e.target.elements.email.value,
      country: e.target.elements.country.value,
      address: e.target.elements.address.value,
      lastName: e.target.elements.lastName.value,
      phone: e.target.elements.phone.value,
      city: e.target.elements.city.value,
      code: e.target.elements.code.value,
    };
    console.log(data);
  };

  return (
    <FormControl component="form" onSubmit={onPegar}>
      <Box display="flex" gap={2} justifyContent="space-between" width="100%">
        <Box>
          <Typography sx={{ marginBottom: 2 }}>First Name</Typography>
          <TextField
            name="firstName"
            variant="outlined"
            placeholder="Digite seu nome"
            sx={{ width: "30vw" }}
          />

          <Typography sx={{ marginBottom: 2, marginTop: 2 }}>Email</Typography>
          <TextField
            name="email"
            variant="outlined"
            placeholder="Digite seu email"
            sx={{ width: "30vw" }}
          />

          <Typography sx={{ marginBottom: 2, marginTop: 2 }}>
            Country or Region
          </Typography>
          <TextField
            name="country"
            variant="outlined"
            placeholder="Digite sua região"
            sx={{ width: "30vw" }}
          />

          <Typography sx={{ marginBottom: 2, marginTop: 2 }}>
            Address
          </Typography>
          <TextField
            name="address"
            variant="outlined"
            placeholder="Digite seu Address"
            sx={{ width: "30vw" }}
          />
        </Box>

        <Box>
          <Typography sx={{ marginBottom: 2 }}>Last Name</Typography>
          <TextField
            name="lastName"
            variant="outlined"
            placeholder="Digite seu sobrenome"
            sx={{ width: "30vw" }}
          />

          <Typography sx={{ marginBottom: 2, marginTop: 2 }}>
            Phone Number(optional)
          </Typography>

          <TextField
            name="phone"
            variant="outlined"
            placeholder="Digite seu Phone"
            sx={{ width: "30vw" }}
          />

          <Typography sx={{ marginBottom: 2, marginTop: 2 }}>City</Typography>
          <TextField
            name="city"
            variant="outlined"
            placeholder="Digite sua cidade"
            sx={{ width: "30vw" }}
          />

          <Typography sx={{ marginBottom: 2, marginTop: 2 }}>
            Postal Code
          </Typography>
          <TextField
            name="code"
            variant="outlined"
            placeholder="Digite seu Codigo postal"
            sx={{ width: "30vw" }}
          />
        </Box>
      </Box>

      <button type="submit">Enviar</button>
    </FormControl>
  );
};
