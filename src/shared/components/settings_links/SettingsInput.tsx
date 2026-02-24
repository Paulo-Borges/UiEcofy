import { Box, FormControl, TextField, Typography } from "@mui/material";
import { useState, type FormEvent } from "react";

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

const masks = {
  phone: (value: string) => {
    return value
      .replace(/\D/g, "") // Remove tudo que não é dígito
      .replace(/(\d{2})(\d)/, "($1) $2") // Coloca parênteses no DDD
      .replace(/(\d{5})(\d)/, "$1-$2") // Coloca o hífen no número
      .replace(/(-\d{4})\d+?$/, "$1"); // Limita a quantidade de números
  },
  code: (value: string) => {
    return value
      .replace(/\D/g, "") // Remove tudo que não é dígito
      .replace(/(\d{5})(\d)/, "$1-$2") // Exemplo de CEP: 00000-000
      .replace(/(-\d{3})\d+?$/, "$1"); // Limita a 8 dígitos
  },
  email: (value: string) => {
    return value.toLowerCase().trim(); // Apenas limpeza básica
  },
};

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

  const [response, setResponse] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  function handleChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = target;
    let maskedValue = value;

    if (id === "phone") maskedValue = masks.phone(value);
    if (id === "code") maskedValue = masks.code(value);
    if (id === "email") maskedValue = masks.email(value);

    setForm({ ...form, [id]: maskedValue });

    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: "" }));
    }
  }

  function validate() {
    const newErrors: { [key: string]: string } = {};

    if (!form.firstName) newErrors.firstName = "Nome é obrigatório";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      newErrors.email = "E-mail inválido";
    }

    if (form.phone.length < 14) {
      newErrors.phone = "Telefone incompleto";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setResponse(false);

    if (validate()) {
      localStorage.setItem("@MeuApp:dados", JSON.stringify(form));
      setResponse(true);
      console.log("Sucesso!", form);
    }
  }

  return (
    <FormControl
      component="form"
      onSubmit={handleSubmit}
      sx={{ width: "100%", padding: 2 }}
    >
      <Box display="flex" flexWrap="wrap" gap={3}>
        {formFields.map(({ id, label, type }) => (
          <Box key={id} sx={{ width: { xs: "100%", sm: "48%" } }}>
            <Typography sx={{ marginBottom: 1, fontWeight: 500 }}>
              {label}
            </Typography>
            <TextField
              name={label}
              type={type}
              id={id}
              value={form[id as keyof typeof form]}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              error={!!errors[id]} // Fica vermelho se houver erro
              helperText={errors[id]} // Exibe a mensagem de erro
              placeholder={`Digite seu ${label.toLowerCase()}`}
            />
          </Box>
        ))}
      </Box>
      {response && (
        <Typography sx={{ width: { xs: "100%", sm: "48%", color: "#13db31" } }}>
          Dados enviados pro localStorage
        </Typography>
      )}
      <button
        type="submit"
        style={{ marginTop: "20px", padding: "10px 20px", cursor: "pointer" }}
      >
        Enviar
      </button>
    </FormControl>
  );
};
