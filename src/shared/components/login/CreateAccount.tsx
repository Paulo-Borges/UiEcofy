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
  const [nome, setNome] = useState(""); /*teste pegar nome 1 */
  const [senha, setSenha] = useState(""); /*teste pegar nome 1 */
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
    if (fullName && nome && senha) {
      // Lógica de salvar...
      onSuccess(); // Vai para a tela de sucesso
    } else {
      alert("Preencha todos os campos");
    }
  };

  const handleEntrar = useCallback(() => {
    // console.log(email);

    if (fullName.trim().length > 2 && fullName !== "") {
      localStorage.setItem("@MeuApp:usuario", fullName);

      navigate("/");
    } else {
      alert("Introduza um nome válido!");
    }
    if (nome.length > 2 && nome !== "") {
      localStorage.setItem("@MeuApp:pessoa", nome);

      navigate("/");
    } else {
      alert("Introduza um sobrenome válido!");
    }
  }, [fullName, nome, navigate]);

  return (
    <Box sx={{ display: "flex", background: "#ffffff" }}>
      <Box sx={{ display: "flex", background: "#ffffff" }}>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "#ffffff",
            width: "100%",
            height: "100%",
          }}
        >
          <Box sx={{ marginBottom: 3 }}>
            <Box>
              <InputLabel>Full name</InputLabel>

              <InputBase
                type="text"
                value={fullName}
                name={fullName}
                onChange={(e) => setFullName(e.target.value)}
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
              <InputLabel>Email</InputLabel>
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

            <Box>
              <InputLabel>Password</InputLabel>
              <InputBase
                type="text"
                value={senha}
                name={senha}
                onChange={(e) => setSenha(e.target.value)}
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
              <Typography>
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
            // onClick={handleEntrar}
            onClick={handleCreate}
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
            <Typography sx={{ color: "#ffffff" }}>Create Account13</Typography>
          </Box>

          <Typography sx={{ marginBottom: 2 }}>
            Already have an account?{" "}
            <Link
              component="button" // Faz o link se comportar como botão para não recarregar a página
              variant="body2"
              onClick={(e: any) => {
                e.preventDefault();
                onBackToLogin(); // Chama a função que troca a aba para 'login'
              }}
              sx={{ cursor: "pointer", fontWeight: "bold" }}
            >
              Log In
            </Link>
          </Typography>

          <Box sx={{ display: "flex", marginBottom: 4 }}>
            <Divider />
            Or
          </Box>
          <Box
            component="button"
            sx={{
              display: "flex",
              alignItems: "center",
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
            <Box sx={{ color: "#666d80" }}>
              ©2025 Ecarto. All right reserved.
            </Box>
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
    </Box>
  );
};
