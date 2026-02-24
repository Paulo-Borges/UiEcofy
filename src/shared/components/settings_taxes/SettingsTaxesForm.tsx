import { Box, FormControl, TextField, Typography } from "@mui/material";
import { useState } from "react";

const formFields = [
  {
    id: "name",
    label: "Name",
  },
  {
    id: "permanent",
    label: "Permanent residence",
  },
  {
    id: "mailing",
    label: "Mailing address",
  },
  {
    id: "treaty",
    label: "Treaty country",
  },
];

export const SettingsTaxesForm: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    permanent: "",
    mailing: "",
    treaty: "",
  });

  return (
    <Box paddingBottom={3} marginTop={3}>
      <Typography sx={{ fontWeight: 500, fontSize: 18, marginBottom: 1 }}>
        Tax Form Review
      </Typography>
      <Typography sx={{ fontWeight: 100, fontSize: 14, color: "#545454" }}>
        Manage where you collect taxes and duties. Check with a tax expert if
        you're unsure where you have a tax obligation.
      </Typography>

      <FormControl
        component="form"
        // onSubmit={handleSubmit}
        sx={{ width: "100%" }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {formFields.map(({ id, label }) => (
            <Box key={id}>
              <Typography sx={{ marginTop: 6, marginBottom: 3 }}>
                {label}
              </Typography>
              <TextField
                variant="outlined"
                placeholder="Digite seu nome"
                sx={{ width: "30vw" }}
              />
            </Box>
          ))}
        </Box>
      </FormControl>
    </Box>
  );
};
