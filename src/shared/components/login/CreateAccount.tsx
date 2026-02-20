import {
  Avatar,
  Box,
  Divider,
  InputBase,
  InputLabel,
  Link,
  Link as MuiLink,
  Typography,
} from "@mui/material";
import { useCallback, useState } from "react";

// import { useUsuarioLogado } from "../shared/hooks";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import GoogleIcon from "@mui/icons-material/Google";

export const CreateAccount = ({ onBackToLogin, onSuccess }: any) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState(""); /*teste pegar nome 1 */
  const [nome, setNome] = useState(""); /*teste pegar nome 1 */
  const [isMoved, setIsMoved] = useState(true);
  const [isNone, setIsNone] = useState(true);

  const navigate = useNavigate();

  const handleSing = () => {
    setIsMoved(!isMoved);
  };

  const handleCheck = () => {
    setIsNone(!isNone);
  };

  const handleCreate = () => {
    if (fullName && email && nome) {
      // Lógica de salvar...
      onSuccess(); // Vai para a tela de sucesso
    } else {
      alert("Preencha todos os campos");
    }
  };

  const handleEntrar = useCallback(
    (e) => {
      e.preventDefault();
      const isEmailValid = email.trim().length > 2 && email.includes("@");
      const isFullNameValid = fullName.trim().length > 2 && fullName !== "";
      const isNomeValid = nome.trim().length >= 6 && nome !== "";

      if (isEmailValid && isFullNameValid && isNomeValid) {
        localStorage.setItem("@MeuApp:usuario", email);
        localStorage.setItem("@MeuApp:pessoaFull", fullName);
        localStorage.setItem("@MeuApp:pessoa", nome);

        // Navega para a home apenas se tudo estiver ok
        navigate("/");
      } else {
        // Alerta específico baseado no que falta
        if (!isEmailValid && !isFullNameValid) {
          alert("Por favor, preencha o e-mail ou o nome corretamente.");
        } else if (!isEmailValid) {
          alert("Introduza um e-mail válido!");
        } else {
          alert("Introduza um nome válido!");
        }
      }
    },
    [email, fullName, nome, navigate],
  );

  return (
    <Box sx={{ background: "#ffffff" }}>
      <Box sx={{ display: "flex", padding: 3, gap: 1 }}>
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
          justifyContent: "center",
          alignItems: "start",
          background: "#ffffff",
          paddingLeft: 20,
          width: "100%",
          height: "100%",
          marginTop: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            marginBottom: 2,
          }}
        >
          <Typography
            sx={{ fontWeight: "bold", fontSize: 30, marginBottom: 2 }}
          >
            Create account
          </Typography>
          <Typography sx={{ fontWeight: 100, fontSize: 13, marginBottom: 2 }}>
            Start your 30-day free trial. Cancel anytime.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            backgroundColor: "#dadada",
            paddingX: 6,
            paddingY: 1,
            borderRadius: 12,
          }}
        >
          <Box
            onClick={() => {}}
            sx={{
              backgroundColor: "#ffffff",
              paddingX: 14,
              paddingY: 1,
              borderRadius: 12,
              cursor: "pointer",
              transform: isMoved ? "translateX(210px)" : "translateX(0)",
            }}
          >
            <Typography sx={{ fontSize: 13 }}>Sign in</Typography>
          </Box>
          <Box
            // onClick={onSwitchTab}
            sx={{
              paddingX: 8,
              paddingY: 1,
              borderRadius: 12,
              cursor: "pointer",
              transform: isMoved ? "translateX(-300px)" : "translateX(0)",
            }}
          >
            <Typography sx={{ fontSize: 13 }}>Sign Up</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            marginBottom: 3,
            marginTop: 3,
          }}
        >
          <Box>
            <InputLabel sx={{ marginBottom: 1 }}>Full name</InputLabel>

            <InputBase
              type="text"
              value={fullName}
              name={fullName}
              onChange={(e) => setFullName(e.target.value)}
              sx={{
                border: "1px solid #ccc",
                padding: 0.5,
                paddingX: 22,
                borderRadius: 8,
                width: "100%",
              }}
            />
          </Box>

          <Box>
            <InputLabel sx={{ marginBottom: 1 }}>Email</InputLabel>
            <InputBase
              type="text"
              value={email}
              name={email}
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
            <InputLabel sx={{ marginBottom: 1 }}>Nome</InputLabel>
            <InputBase
              type="text"
              value={nome}
              name={nome}
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
            <CheckBoxIcon
              opacity={isNone ? 0 : 1}
              sx={{
                transform: !isNone ? "translateX(30px)" : "translateX(0)",
              }}
            />
            <CheckBoxOutlineBlankIcon
              cursor="pointer"
              onClick={handleCheck}
              sx={{ opacity: isNone ? "none" : 0 }}
            />
            <Typography sx={{ display: "flex", gap: 6 }}>
              By proceeding, you agree to the
              <Box>
                <Typography sx={{ color: "#f68605" }}>
                  Terms and Conditions
                </Typography>
              </Box>
            </Typography>
          </Box>
        </Box>

        <Box
          component="button"
          onClick={handleEntrar}
          // onClick={handleCreate}
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
          <Typography sx={{ color: "#ffffff" }}>Create Account</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 4,
          }}
        >
          <Divider />
          <Typography
            sx={{
              marginBottom: 2,
              paddingLeft: 30,
            }}
          >
            <Link
              component="button" // Faz o link se comportar como botão para não recarregar a página
              variant="body2"
              onClick={(e: any) => {
                e.preventDefault();
                onBackToLogin(); // Chama a função que troca a aba para 'login'
              }}
              sx={{ cursor: "pointer", fontWeight: "bold" }}
            >
              Or
            </Link>
          </Typography>
        </Box>
        <Box
          component="button"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            backgroundColor: "transparent",
            paddingX: 23,
            paddingY: 1,
            borderRadius: 12,
            marginBottom: 22,
            cursor: "pointer",
          }}
        >
          <GoogleIcon fontSize="small" />
          <Link
            href="https://www.google.com"
            target="_blank"
            rel="noreferrer"
            underline="hover"
          >
            Sign in With Google
          </Link>
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
            <MuiLink
              component={RouterLink}
              to="/help"
              underline="hover"
              color="#666d80"
            >
              Get help
            </MuiLink>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
