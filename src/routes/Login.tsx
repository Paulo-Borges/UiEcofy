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

export const Login = () => {
  // const { nomeDoUsuario } = useUsuarioLogado();
  // const inputPasswordRef = useRef<HTMLInputElement>(null);

  const [email, setEmail] = useState("");
  const [nome, setNome] = useState(""); /*teste pegar nome 1 */
  const [isMoved, setIsMoved] = useState(false);
  const [isNone, setIsNone] = useState(true);

  const navigate = useNavigate();

  const handleSing = () => {
    setIsMoved(!isMoved);
  };

  const handleCheck = () => {
    setIsNone(!isNone);
  };

  const handleEntrar = useCallback(() => {
    // console.log(email);

    if (email.trim().length > 2 && email !== "") {
      localStorage.setItem("@MeuApp:usuario", email);

      navigate("/");
    } else {
      alert("Introduza um email válido!");
    }
    if (nome.length > 2 && nome !== "") {
      localStorage.setItem("@MeuApp:pessoa", nome);

      navigate("/");
    } else {
      alert("Introduza um nome válido!");
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
              onClick={handleSing}
              sx={{
                backgroundColor: "#ffffff",
                paddingX: 14,
                paddingY: 1,
                borderRadius: 12,
                cursor: "pointer",
                transform: isMoved ? "translateX(180px)" : "translateX(0)",
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
                transform: isMoved ? "translateX(-300px)" : "translateX(0)",
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
            <InputLabel>Nome</InputLabel>
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
              sx={{ transform: !isNone ? "translateX(30px)" : "translateX(0)" }}
            />
            <CheckBoxOutlineBlankIcon
              cursor="pointer"
              onClick={handleCheck}
              sx={{ opacity: isNone ? "none" : 0 }}
            />
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
      <Box
        sx={{
          background: "#f2eeee",
          width: "100%",
          height: "100vh",
          borderRadius: 6,
          border: "none",
        }}
      ></Box>
    </Box>
  );
};
