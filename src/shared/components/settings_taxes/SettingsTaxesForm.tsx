import { Box, FormControl, TextField, Typography } from "@mui/material";
import { useState, type FormEvent } from "react";

type FormState = {
  name: string;
  permanent: string;
  mailing: string;
  treaty: string;
};

const formFields: { id: keyof FormState; label: string }[] = [
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
  const [response, setResponse] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // 1. Função para atualizar o estado conforme o usuário digita
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));

    // Opcional: Limpar o erro do campo enquanto o usuário digita
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: "" }));
    }
  };

  function validate() {
    const newErrors: { [key: string]: string } = {};

    if (!form.name || form.name.length < 5)
      newErrors.name = "Nome é obrigatório";

    if (form.mailing.length < 5) {
      newErrors.mailing = "endereço incompleto!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setResponse(false);

    if (validate()) {
      localStorage.setItem("@MeuApp:taxes", JSON.stringify(form));
      setResponse(true);
      console.log("Sucesso!", form);
    }
  }

  return (
    <Box paddingBottom={3} marginTop={3} onSubmit={handleSubmit}>
      <Typography sx={{ fontWeight: 500, fontSize: 18, marginBottom: 1 }}>
        Tax Form Review
      </Typography>
      <Typography sx={{ fontWeight: 100, fontSize: 14, color: "#545454" }}>
        Manage where you collect taxes and duties. Check with a tax expert if
        you're unsure where you have a tax obligation.
      </Typography>

      <FormControl component="form" sx={{ width: "100%" }}>
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
                id={id}
                variant="outlined"
                placeholder={`Digite seu ${label.toLowerCase()}`}
                // 2. Conectando o estado aos inputs
                value={form[id]}
                onChange={handleChange}
                sx={{ width: "30vw" }}
                error={!!errors[id]} // Fica vermelho se houver erro
                helperText={errors[id]} // Exibe a mensagem de erro
              />
            </Box>
          ))}
        </Box>
        {response && (
          <Typography
            sx={{ width: { xs: "100%", sm: "48%", color: "#13db31" } }}
          >
            Dados enviados pro localStorage
          </Typography>
        )}
        <button
          type="submit"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 14,
            marginTop: "20px",
            cursor: "pointer",
          }}
        >
          <Typography sx={{ fontWeight: 500 }}>Enviar</Typography>
        </button>
      </FormControl>
    </Box>
  );
};
