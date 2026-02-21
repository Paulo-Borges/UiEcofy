import { Box, FormControl, TextField, Typography } from "@mui/material";
import { useState } from "react";

const formFields = [
  {
    id: "firstName",
    label: "first Name",
    type: "text",
  },
  {
    id: "email",
    label: "Email",
    type: "email",
  },
  {
    id: "country",
    label: "Country",
    type: "text",
  },
  {
    id: "address",
    label: "Address",
    type: "text",
  },
  {
    id: "lastName",
    label: "Last Name",
    type: "text",
  },
  {
    id: "phone",
    label: "Phone",
    type: "text",
  },
  {
    id: "city",
    label: "City",
    type: "text",
  },
  {
    id: "code",
    label: "Code",
    type: "text",
  },
];

export const SettingsInput: React.FC = () => {
  const [form, setForm] = useState({
    firstName: "",
    email: "",
    country: "",
    address: "",
    lastName: "",
    phone: "",
    city: "",
    code: "",
  });

  const [response, setResponse] = useState(null);

  function handleChange({ target }: React.FocusEvent<HTMLInputElement>) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://ranekapi.origamid.dev/json/api/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((response) => {
      setResponse(response);
    });
  }

  return (
    <FormControl component="form" onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexWrap="wrap"
        gap={2}
        justifyContent="space-between"
        width="100%"
      >
        {formFields.map(({ id, label, type }) => (
          <Box>
            <Typography sx={{ marginBottom: 2 }}>{label}</Typography>
            <TextField
              name={label}
              type={type}
              id={id}
              value={form[id]}
              onChange={handleChange}
              variant="outlined"
              placeholder="Digite seu nome"
              sx={{ width: "30vw" }}
            />
          </Box>
        ))}
      </Box>
      {response && <p>Dados Guardados</p>}
      <button>Enviar</button>
    </FormControl>
  );
};
