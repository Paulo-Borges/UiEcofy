import {
  Avatar,
  Box,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export const Login = () => {
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

      <Typography>Quantidade de caracteres no email: {emailLength}</Typography>
      <FormControl sx={{ marginBottom: 2 }}>
        <InputLabel htmlFor="component-outlined">UserName</InputLabel>
        <OutlinedInput
          id="component-outlined"
          defaultValue=""
          label="UserName"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl sx={{ marginBottom: 4 }}>
        <InputLabel htmlFor="component-outlined">Password</InputLabel>
        <OutlinedInput
          id="component-outlined"
          defaultValue=""
          label="Password"
          type="password"
          value={password}
          ref={inputPasswordRef}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>

      <Stack
        direction="row"
        component={Button}
        alignItems="center"
        border="2px solid #ccc"
        gap={2}
        paddingX={4}
        onClick={handleEntrar}
      >
        <Button variant="text" sx={{ fontSize: 20 }} type="button">
          Entrar
        </Button>
        <Avatar
          alt="logo do Ecofy"
          src="./src/assets/Group.svg"
          variant="square"
          sx={{ width: 30, height: 30 }}
        ></Avatar>
      </Stack>
    </Box>
  );
};
