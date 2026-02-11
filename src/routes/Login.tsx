import {
  Avatar,
  Box,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useCallback, useRef, useState } from "react";

import { InputLogin } from "../shared/components/InputLogin";
import { ButtonLogin } from "../shared/components/ButtonLogin";
import { useUsuarioLogado } from "../shared/hooks";
import { useNavigate } from "react-router-dom";
import { HomeBase } from "../shared/components/home_base/HomeBase";

export const Login = ({ titulo }) => {
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
      sx={{
        display: "flex",
        background: "#fff",
        padding: 1,
        height: "100vh",
        width: "100vw",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 1,
          justifyContent: "start",
          alignItems: "start",
        }}
      >
        <Avatar
          alt="logo do Ecofy"
          src="../src/assets/Group.svg"
          variant="square"
        ></Avatar>
        <Typography color="secondary" variant="h6" sx={{ fontWeight: "bold" }}>
          ECOFY
        </Typography>
      </Box>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
          background: "#ffffff",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box></Box>

          {/* <Box>Oiii</Box> */}
        </Box>
        {/* <Typography sx={{ fontWeight: "bold", fontSize: 30, marginBottom: 2 }}>
          LOGIN
        </Typography> */}

        <Box padding={4}>
          <Stack
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
            direction="row"
          >
            <Box>
              <Typography
                sx={{ marginBottom: 2, fontWeight: "bold", fontSize: 25 }}
              >
                Welcome back
              </Typography>
              <Typography sx={{ marginBottom: 2, color: "#545454" }}>
                Glad to see you again. Log in to your account.
              </Typography>
            </Box>
          </Stack>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#f2eeee",
            paddingX: 1,
            paddingY: 0.5,
            gap: 8,
            borderRadius: 9,
            marginBottom: 6,
          }}
        >
          <Box
            sx={{
              background: "#fff",
              paddingX: 9,
              paddingY: 1,
              borderRadius: 6,
            }}
          >
            Sign in
          </Box>
          <Box
            sx={{
              background: "#f2eeee",
              paddingX: 8,
              paddingY: 0.5,
              borderRadius: 9,
            }}
          >
            Sign Up
          </Box>
        </Box>

        <Box>
          <Typography>Email</Typography>
          <TextField
            label="Digite seu Email"
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "20px",
                paddingX: "100px",
                marginBottom: 2,
              },
            }}
          />
        </Box>

        <Box>
          <Typography>Nome</Typography>
          <TextField
            label="Digite seu Nome"
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "20px",
                paddingX: "100px",
                paddingY: "0px",
              },
              marginBottom: 5,
            }}
          />
        </Box>
        <Box
          onClick={handleEntrar}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#f2eeee",
            color: "#fff",
            paddingX: 24,
            paddingY: 1,
            gap: 8,
            borderRadius: 9,
            marginBottom: 6,
          }}
        >
          <Typography>Sign in</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
          background: "#f2eeee",
          borderRadius: 3,
          borderBottomColor: 3,
        }}
      >
        Aquii..
      </Box>
    </Box>
  );
};
