import { Box } from "@mui/material";
import { useState } from "react";
import { Login } from "../../../routes/Login";
import { CreateAccount } from "./CreateAccount";
import { ResetLogin } from "../../../routes/ResetLogin";
import { SuccessLogin } from "./SuccessLogin";

export type createTab =
  | "login"
  | "createAccount"
  | "resetLogin"
  | "successLogin";

export const AuthLogin = () => {
  // Começamos com a aba 'login'
  const [activeTab, setActiveTab] = useState<createTab>("login");

  return (
    <>
      <Box
        sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        {/* Aqui a mágica acontece: ele só renderiza UM por vez */}
        {activeTab === "login" && (
          <Login
            onSwitchTab={() => setActiveTab("createAccount")}
            onForgotPass={() => setActiveTab("resetLogin")}
            onSuccess={() => setActiveTab("successLogin")}
          />
        )}

        {activeTab === "createAccount" && (
          <CreateAccount
            onBackToLogin={() => setActiveTab("login")}
            onSuccess={() => setActiveTab("successLogin")}
          />
        )}

        {activeTab === "resetLogin" && (
          <ResetLogin onBack={() => setActiveTab("login")} />
        )}

        {activeTab === "successLogin" && (
          <SuccessLogin onBackToLogin={() => setActiveTab("login")} />
        )}
      </Box>
    </>
  );
};
