import { Avatar, Box, Typography } from "@mui/material";
import { useCallback, useRef, useState } from "react";

import { InputLogin } from "../shared/components/InputLogin";
import { ButtonLogin } from "../shared/components/ButtonLogin";
import { useUsuarioLogado } from "../shared/hooks";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { nomeDoUsuario } = useUsuarioLogado();

  const inputPasswordRef = useRef<HTMLInputElement>(null);

  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [nome, setNome] = useState(""); /*teste pegar nome 1 */

  const navigate = useNavigate();

  const handleEntrar = useCallback(() => {
    console.log(email, nome);

    if (email.trim().length > 2 && nome !== "") {
      localStorage.setItem(
        "@MeuApp:usuario",
        email,
      ); /*localStorage 1º chave 2º oo que esta guardado */
      localStorage.setItem(
        "@MeuApp:pessoa",
        nome,
      ); /*localStorage 1º chave 2º oo que esta guardado */

      navigate("/");
    } else {
      alert("Introduza um dado válido!");
    }
  }, [email, nome, navigate]);

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

      {/* <Typography>{nomeDoUsuario}</Typography> */}

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
        value={nome}
        onChange={(newValue) => setNome(newValue)}
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
      {/* <Dashboard /> */}
    </Box>
  );
};
