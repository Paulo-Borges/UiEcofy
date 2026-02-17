import { Login } from "./Login";
import { Avatar, Box, Typography } from "@mui/material";
import { useState } from "react";
import { CreateAccount } from "../shared/components/login/CreateAccount";
import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

export type createTab =
  | "login"
  | "createAccount"
  | "resetAccount"
  | "successLogin";

export const ResetLogin = () => {
  const [activeTab, setActiveTab] = useState<createTab>(" ");

  const [isMoved, setIsMoved] = useState(false);
  // const [isNone, setIsNone] = useState(true);

  // const handleSing = () => {
  //   setIsMoved(!isMoved);
  // };

  // const handleCheck = () => {
  //   setIsNone(!isNone);
  // };

  // const handleEntrar = useCallback(() => {
  //   // console.log(email);

  //   if (email.trim().length > 2 && email !== "") {
  //     localStorage.setItem("@MeuApp:usuario", email);

  //     navigate("/");
  //   } else {
  //     alert("Introduza um email válido!");
  //   }
  //   if (nome.length > 2 && nome !== "") {
  //     localStorage.setItem("@MeuApp:pessoa", nome);

  //     navigate("/");
  //   } else {
  //     alert("Introduza um nome válido!");
  //   }
  // }, [email, nome, navigate]);

  {
    /* 3. Passando as props necessárias para o controle de navegação */
  }
  {
    /* <SettingsLinks setActiveTab={setActiveTab} activeTab={activeTab} /> */
  }
  // {/* 4. Renderização Condicional com base no estado */}
  <Box sx={{ mt: 2 }}>
    {activeTab === "login" && <Login />}
    {activeTab === "createAccount" && <CreateAccount />}
    {activeTab === "resetLogin" && <ResetLogin />}
    {/* {activeTab === "successLogin" && <SettingsLanguages />} */}
  </Box>;

  return (
    <Box sx={{ padding: 4, background: "#ffffff" }}>
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
        sx={{
          display: "flex",
          background: "#ffffff",
          padding: 2,
          paddingTop: 30,
        }}
      >
        <Box
          component="form"
          sx={{
            display: "flex",
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
                Create account
              </Typography>
              <Typography
                sx={{ fontWeight: 100, fontSize: 15, marginBottom: 2 }}
              >
                Start your 30-day free trial. Cancel anytime.
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
                onClick={() => setActiveTab("login")}
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
                onClick={() => setActiveTab("createAccount")}
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
