import { Box, FormControl, TextField, Typography } from "@mui/material";
import { useState } from "react";

export const SettingsInput: React.FC = () => {
  const [firstName, setFirstName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [country, setCountry] = useState<string | null>(null);
  const [address, setAddress] = useState<string | null>(null);
  const [lastName, setLastName] = useState<string | null>(null);
  const [phone, setPhone] = useState<string | null>(null);
  const [city, setCity] = useState<string | null>(null);
  const [code, setCode] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [error1, setError1] = useState<string | null>(null);
  const [error2, setError2] = useState<string | null>(null);
  const [error3, setError3] = useState<string | null>(null);

  const handleFirstName = (e) => setFirstName(e.target.value);
  const handleCountry = (e) => setCountry(e.target.value);
  const handleAddress = (e) => setAddress(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handleCity = (e) => setCity(e.target.value);

  console.log(firstName, email, country, address, lastName, phone, city, code);

  // // Aplicando a máscara
  //   const celular = "21964457368";
  // const formatado = celular.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
  // console.log(formatado); // Resultado: (21) 96445-7368

  function isFirstValid(value: string): boolean {
    if (value.length === 0) {
      setError3("Preencha o nome");
      return false;
    } else {
      setError3(null);
      return true;
    }
  }

  function isEmailValid(value: string): boolean {
    if (value.length === 0) {
      setError2("Preencha um email");
      return false;
    } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(value)) {
      setError2("Preencha um email válido");
      return false;
    } else {
      setError2(null);
      return true;
    }
  }

  function isPhoneValid(value: string): boolean {
    if (value.length === 0) {
      setError("Preencha o número do celular");
      return false;
    } else if (!/^\d{2}\d{5}-\d{4}$/.test(value)) {
      setError("Preencha um celular válido");
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function isCodeValid(value: string): boolean {
    if (value.length === 0) {
      setError1("Preencha os dados");
      return false;
    } else if (!/^\d{5}-\d{3}$/.test(value)) {
      setError1("Preencha um cep válido");
      return false;
    } else {
      setError1(null);
      return true;
    }
  }

  function handleBlurFirst({ target }: React.FocusEvent<HTMLInputElement>) {
    isFirstValid(target.value);
  }

  function handleBlurCode({ target }: React.FocusEvent<HTMLInputElement>) {
    isCodeValid(target.value);
  }

  function handleBlurPhone({ target }: React.FocusEvent<HTMLInputElement>) {
    isPhoneValid(target.value);
  }
  function handleBlurEmail({ target }: React.FocusEvent<HTMLInputElement>) {
    isEmailValid(target.value);
  }

  function handlePhoneChange({ target }: React.FocusEvent<HTMLInputElement>) {
    if (error) isPhoneValid(target.value);
  }
  function handleCodeChange({ target }: React.FocusEvent<HTMLInputElement>) {
    if (error1) isCodeValid(target.value);
  }
  function handleEmailChange({ target }: React.FocusEvent<HTMLInputElement>) {
    if (error2) isEmailValid(target.value);
  }
  function handleFirstChange({ target }: React.FocusEvent<HTMLInputElement>) {
    if (error3) isFirstValid(target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const codeIsValid = isCodeValid(code);
    const phoneIsValid = isPhoneValid(phone);

    // Lógica: Só envia se AMBOS forem verdadeiros
    if (codeIsValid && phoneIsValid) {
      console.log("Enviou: Tudo certo!");
    } else {
      console.log("Não Enviar: Existem erros no formulário.");
    }
  }

  return (
    <FormControl component="form" onSubmit={handleSubmit}>
      <Box display="flex" gap={2} justifyContent="space-between" width="100%">
        <Box>
          <Typography sx={{ marginBottom: 2 }}>First Name</Typography>
          <TextField
            name="firstName"
            type="text"
            onBlur={handleBlurFirst}
            onChange={handleFirstChange}
            variant="outlined"
            placeholder="Digite seu nome"
            sx={{ width: "30vw" }}
          />
          {error3 && <p style={{ border: "1px solid #e81010" }}>{error3}</p>}
          <Typography sx={{ marginBottom: 2, marginTop: 2 }}>Email</Typography>
          <TextField
            name="email"
            type="email"
            onBlur={handleBlurEmail}
            onChange={handleEmailChange}
            variant="outlined"
            placeholder="Digite seu email"
            sx={{ width: "30vw" }}
          />
          {error2 && <p style={{ border: "1px solid #e81010" }}>{error2}</p>}
          <Typography sx={{ marginBottom: 2, marginTop: 2 }}>
            Country or Region
          </Typography>
          <TextField
            name="country"
            type="text"
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
            type="text"
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
            type="text"
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
            onBlur={handleBlurPhone}
            onChange={handlePhoneChange}
            variant="outlined"
            placeholder="Digite seu Phone"
            sx={{ width: "30vw" }}
          />
          {error && <p style={{ border: "1px solid #e81010" }}>{error}</p>}
          <Typography sx={{ marginBottom: 2, marginTop: 2 }}>City</Typography>
          <TextField
            name="city"
            type="text"
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
            onBlur={handleBlurCode}
            onChange={handleCodeChange}
            variant="outlined"
            placeholder="Digite seu Codigo postal"
            sx={{ width: "30vw" }}
          />
          {error1 && <p style={{ border: "1px solid #e81010" }}>{error1}</p>}
        </Box>
      </Box>
    </FormControl>
  );
};
