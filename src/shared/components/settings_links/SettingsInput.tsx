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

  // const [response, setResponse] = useState(null);   /*mascara 1 */
  const [response, setResponse] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>(
    {},
  ); /*mascara 2*/

  function handleChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = target;
    let maskedValue = value; /*mascara 3*/

    // Aplica a máscara baseada no ID do campo
    if (id === "phone") maskedValue = masks.phone(value); /*mascara 4*/
    if (id === "code") maskedValue = masks.code(value); /*mascara 4*/
    if (id === "email") maskedValue = masks.email(value); /*mascara 4*/

    // setForm({ ...form, [id]: value });   /*mascara 5*/
    setForm({ ...form, [id]: maskedValue });

    // Limpa o erro do campo quando o usuário volta a digitar
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: "" }));
    }
  }

  // --- LÓGICA DE VALIDAÇÃO ---  /*mascara 6*/
  function validate() {
    const newErrors: { [key: string]: string } = {};

    if (!form.firstName) newErrors.firstName = "Nome é obrigatório";

    // Validação de Email (Regex padrão)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      newErrors.email = "E-mail inválido";
    }

    // Validação de Telefone (verifica se tem o tamanho certo após máscara)
    if (form.phone.length < 14) {
      newErrors.phone = "Telefone incompleto";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // setResponse(true);
    setResponse(false); /*mascara 7*/

    // localStorage.setItem("@MeuApp:nome", form.firstName);   /*mascara 8*/
    // localStorage.setItem("@MeuApp:email", form.email);      /*mascara 8*/
    // localStorage.setItem("@MeuApp:city", form.city);        /*mascara 8*/
    // localStorage.setItem("@MeuApp:phone", form.phone);       /*mascara 8*/

    if (validate()) {
      localStorage.setItem("@MeuApp:dados", JSON.stringify(form));
      setResponse(true);
      console.log("Sucesso!", form);
    }
  }
  console.log("Formulário enviado com sucesso:", form);

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
        <p style={{ color: "#e90f0f" }}>Dados enviados pro localStorage</p>
      )}
      <button>Enviar</button>
    </FormControl>
  );
};
