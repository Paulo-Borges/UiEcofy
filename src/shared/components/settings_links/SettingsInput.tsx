import { Box, FormControl, TextField, Typography } from "@mui/material";
import { useState } from "react";

export const SettingsInput: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [code, setCode] = useState("");

  const handleFirstName = (e) => setFirstName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleCountry = (e) => setCountry(e.target.value);
  const handleAddress = (e) => setAddress(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handlePhone = (e) => setPhone(e.target.value);
  const handleCity = (e) => setCity(e.target.value);
  const handleCode = (e) => setCode(e.target.value);

  console.log(firstName, email, country, address, lastName, phone, city, code);

  return (
    <FormControl component="form">
      <Box display="flex" gap={2} justifyContent="space-between" width="100%">
        <Box>
          <Typography sx={{ marginBottom: 2 }}>First Name</Typography>
          <TextField
            name="firstName"
            required
            onChange={handleFirstName}
            variant="outlined"
            placeholder="Digite seu nome"
            sx={{ width: "30vw" }}
          />

          <Typography sx={{ marginBottom: 2, marginTop: 2 }}>Email</Typography>
          <TextField
            name="email"
            required
            onChange={handleEmail}
            variant="outlined"
            placeholder="Digite seu email"
            sx={{ width: "30vw" }}
          />

          <Typography sx={{ marginBottom: 2, marginTop: 2 }}>
            Country or Region
          </Typography>
          <TextField
            name="country"
            required
            onChange={handleCountry}
            variant="outlined"
            placeholder="Digite sua região"
            sx={{ width: "30vw" }}
          />

          <Typography sx={{ marginBottom: 2, marginTop: 2 }}>
            Address
          </Typography>
          <TextField
            name="address"
            required
            onChange={handleAddress}
            variant="outlined"
            placeholder="Digite seu Address"
            sx={{ width: "30vw" }}
          />
        </Box>

        <Box>
          <Typography sx={{ marginBottom: 2 }}>Last Name</Typography>
          <TextField
            name="lastName"
            required
            onChange={handleLastName}
            variant="outlined"
            placeholder="Digite seu sobrenome"
            sx={{ width: "30vw" }}
          />

          <Typography sx={{ marginBottom: 2, marginTop: 2 }}>
            Phone Number(optional)
          </Typography>

          <TextField
            name="phone"
            required
            onChange={handlePhone}
            variant="outlined"
            placeholder="Digite seu Phone"
            sx={{ width: "30vw" }}
          />

          <Typography sx={{ marginBottom: 2, marginTop: 2 }}>City</Typography>
          <TextField
            name="city"
            required
            onChange={handleCity}
            variant="outlined"
            placeholder="Digite sua cidade"
            sx={{ width: "30vw" }}
          />

          <Typography sx={{ marginBottom: 2, marginTop: 2 }}>
            Postal Code
          </Typography>
          <TextField
            name="code"
            required
            onChange={handleCode}
            variant="outlined"
            placeholder="Digite seu Codigo postal"
            sx={{ width: "30vw" }}
          />
        </Box>
      </Box>
      <Box
        display="flex"
        gap={4}
        paddingLeft={3}
        color="#f68605"
        sx={{ backgroundColor: "#f9f4f4" }}
      >
        <p>{firstName}</p>
        <p>{email}</p>
        <p>{country}</p>
        <p>{address}</p>
        <p>{lastName}</p>
        <p>{phone}</p>
        <p>{city}</p>
        <p>{code}</p>
      </Box>
      <button type="submit">submi</button>
    </FormControl>
  );
};
