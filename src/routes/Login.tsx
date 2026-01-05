import { Avatar, Box, Typography } from "@mui/material";
import { useCallback, useMemo, useRef, useState } from "react";

import { InputLogin } from "../shared/components/InputLogin";
import { ButtonLogin } from "../shared/components/ButtonLogin";
import { useUsuarioLogado } from "../shared/hooks";
import { Dashboard } from "../shared/components/Dashboard";

export const Login = () => {
  const { nomeDoUsuario, logout } = useUsuarioLogado();

  const inputPasswordRef = useRef<HTMLInputElement>(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // useEffect(() => {
  //   console.log(email, password);
  // }, [email, password]);

  const emailLength = useMemo(() => {
    return email.length * 1000;
  }, [email.length]);

  const handleEntrar = useCallback(() => {
    console.log(email, password);

    if (inputPasswordRef.current !== null) {
      inputPasswordRef.current?.focus();
    }
  }, [email, password]);

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        justifyContent: "center",
        alignItems: "center",
        width: 300,
        height: 400,
        background: "#f2eeee",
      }}
    >
      <Typography sx={{ fontWeight: "bold", fontSize: 30, marginBottom: 2 }}>
        LOGIN
      </Typography>

      <Typography>{nomeDoUsuario}</Typography>

      {/* <Typography>Quantidade de caracteres no email: {emailLength}</Typography> */}

      <InputLogin
        InputLabel="Email"
        type="text"
        value={email}
        onChange={(newValue) => setEmail(newValue)}
        onPressEnter={() => {
          inputPasswordRef.current?.focus();
        }}
      />

      <InputLogin
        type="password"
        InputLabel="Password"
        value={password}
        onChange={(newValue) => setPassword(newValue)}
        ref={inputPasswordRef}
      />

      <ButtonLogin type="button" onClick={handleEntrar}>
        ENTRAR
        <Avatar
          alt="logo do Ecofy"
          src="./src/assets/Group.svg"
          variant="square"
          sx={{ width: 30, height: 30 }}
        ></Avatar>
      </ButtonLogin>

      {/* <ButtonLogin type="button" onClick={logout}>
        logout
      </ButtonLogin> */}
      <Dashboard />
    </Box>
  );
};
