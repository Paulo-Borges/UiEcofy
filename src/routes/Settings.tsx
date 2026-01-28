import { Box, Link, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { SettingsLinks } from "../shared/components/settings_links/SettingsLinks";
import { SettingsForm } from "../shared/components/settings_links/SettingsForm";

import { SettingsPayment } from "../shared/components/settings_payment/SettingsPayment";
import { useState } from "react";

// 1. Definição do tipo para as abas (aumenta a segurança do código)
export type SettingsTab =
  | "general"
  | "payment"
  | "taxes"
  | "languages"
  | "appearance"
  | "session";

const Settings = () => {
  // 2. Inicializando o estado com o tipo definido
  const [activeTab, setActiveTab] = useState<SettingsTab>("general");

  return (
    <Box sx={{ margin: 7, flexGrow: 1 }}>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography component="div" sx={{ marginTop: 7 }}>
            <Box sx={{ fontWeight: 400, fontSize: 24 }}>General Settings</Box>
            <Box sx={{ fontWeight: 100, fontSize: 12 }}>
              Here´s what happening with your store today
            </Box>
          </Typography>
        </Box>
        <Stack>
          <Link
            component="button" // Melhor usar button para acessibilidade se não houver URL
            onClick={() => console.log("Add Customer clicked")}
            sx={{
              display: "flex",
              marginTop: 7,
              background: "#F68605",
              color: "#fff",
              padding: 1,
              paddingX: 2,
              borderRadius: 3,
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            <AddIcon /> Add Customer
          </Link>
        </Stack>
      </Stack>
      {/* 3. Passando as props necessárias para o controle de navegação */}
      <SettingsLinks setActiveTab={setActiveTab} activeTab={activeTab} />

      {/* 4. Renderização Condicional com base no estado */}
      <Box sx={{ mt: 2 }}>
        {activeTab === "general" && <SettingsForm />}
        {activeTab === "payment" && <SettingsPayment />}

        {/* Placeholder para as outras abas caso você as crie futuramente */}
        {activeTab === "taxes" && <Typography>Taxes Content</Typography>}
      </Box>
    </Box>
  );
};

export default Settings;
