import {
  Avatar,
  Box,
  Divider,
  InputBase,
  InputLabel,
  Stack,
  Typography,
} from "@mui/material";
import { useCallback, useRef, useState } from "react";

import { InputLogin } from "../shared/components/InputLogin";
import { ButtonLogin } from "../shared/components/ButtonLogin";
import { useUsuarioLogado } from "../shared/hooks";
import { useNavigate } from "react-router-dom";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import GoogleIcon from "@mui/icons-material/Google";

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
    <Box sx={{ display: "flex", background: "#ffffff", padding: 2 }}>
      <Box sx={{ display: "flex" }}>
        <Avatar
          alt="logo do Ecofy"
          src="../src/assets/Group.svg"
          variant="square"
          sx={{ width: 30, height: 30 }}
        ></Avatar>
        <Typography sx={{ fontWeight: "bold", fontSize: 24 }}>ECOFY</Typography>
      </Box>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          justifyContent: "center",
          alignItems: "center",
          background: "#ffffff",
          width: "100%",
          height: "100vh",
        }}
      >
        <Box sx={{ marginBottom: 4 }}>
          <Box>
            <Typography
              sx={{ fontWeight: "bold", fontSize: 30, marginBottom: 2 }}
            >
              Welcome back
            </Typography>
            <Typography sx={{ fontWeight: 100, fontSize: 15, marginBottom: 2 }}>
              Glad to see you again. Log in to your account.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              backgroundColor: "#dadada",
              paddingX: 1,
              paddingY: 1,
              borderRadius: 12,
            }}
          >
            <Box
              sx={{
                backgroundColor: "#ffffff",
                paddingX: 14,
                paddingY: 1,
                borderRadius: 12,
                cursor: "pointer",
              }}
            >
              Sign in
            </Box>
            <Box
              sx={{
                paddingX: 8,
                paddingY: 1,
                borderRadius: 12,
                cursor: "pointer",
              }}
            >
              Sign Up
            </Box>
          </Box>
        </Box>
        <Box sx={{ marginBottom: 3 }}>
          <Box>
            <InputLabel>Email</InputLabel>

            <InputBase
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                border: "1px solid #ccc",
                padding: 0.5,
                paddingX: 18,
                borderRadius: 8,
                width: "100%",
              }}
            />
          </Box>

          <Box>
            <InputLabel>Nome</InputLabel>
            <InputBase
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              sx={{
                border: "1px solid #ccc",
                padding: 0.5,
                paddingX: 18,
                borderRadius: 8,
                width: "100%",
              }}
            />
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: 13, marginBottom: 4 }}>
          <Box sx={{ display: "flex", gap: 1 }}>
            <CheckBoxOutlineBlankIcon cursor="pointer" />
            <Typography>Keep me logged in</Typography>
          </Box>
          <Box>
            <Typography sx={{ color: "#f68605" }}>Forgot password</Typography>
          </Box>
        </Box>

        <Box
          component="button"
          onClick={handleEntrar}
          sx={{
            display: "flex",
            backgroundColor: "#dadada",
            paddingX: 26,
            paddingY: 1,
            borderRadius: 12,
            marginBottom: 4,
            cursor: "pointer",
          }}
        >
          <Typography sx={{ color: "#ffffff" }}>sign in</Typography>
        </Box>
        <Box sx={{ display: "flex", marginBottom: 4 }}>
          <Divider />
          Or
        </Box>
        <Box
          component="button"
          sx={{
            display: "flex",
            gap: 1,
            backgroundColor: "transparent",
            paddingX: 18,
            paddingY: 1,
            borderRadius: 12,
            marginBottom: 22,
            cursor: "pointer",
          }}
        >
          <GoogleIcon fontSize="small" />
          <Typography>Sign in With Google</Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 33 }}>
          <Box sx={{ color: "#666d80" }}>©2025 Ecarto. All right reserved.</Box>
          <Box
            sx={{
              color: "#666d80",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <HelpOutlineIcon fontSize="small" />
            Get help
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          background: "#f2eeee",
          width: "100%",
          height: "100vh",
          borderRadius: 6,
          border: "none",
        }}
      >
        oiii
      </Box>
    </Box>
  );
};
