import { Box, InputBase, InputLabel, Typography } from "@mui/material";
import { useCallback, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface ResetLoginProps {
  onBack: () => void;
}

export const ResetLogin = ({ onBack }: ResetLoginProps) => {
  const [email, setEmail] = useState("");

  const handleReset = useCallback(() => {
    if (email.includes("@")) {
      alert("Link de recuperação enviado para o seu e-mail!");
      onBack(); // Volta para o login após o "sucesso"
    } else {
      alert("Introduza um e-mail válido!");
    }
  }, [email, onBack]);

  return (
    <Box sx={{ display: "flex", background: "#ffffff", padding: 2 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Box sx={{ width: "100%", maxWidth: 400 }}>
          {/* Botão de Voltar */}
          <Box
            onClick={onBack}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
              mb: 4,
              color: "#666d80",
            }}
          >
            <ArrowBackIcon fontSize="small" />
            <Typography variant="body2">Back to login</Typography>
          </Box>

          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
            Forgot Password?
          </Typography>
          <Typography sx={{ mb: 4, color: "gray" }}>
            No worries, we'll send you reset instructions.
          </Typography>

          <Box sx={{ mb: 3 }}>
            <InputLabel>Email address</InputLabel>
            <InputBase
              fullWidth
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ border: "1px solid #ccc", borderRadius: 8, p: 1 }}
            />
          </Box>

          <Box
            component="button"
            onClick={handleReset}
            sx={{
              width: "100%",
              backgroundColor: "#f68605", // Destaque para ação de reset
              py: 1.5,
              borderRadius: 12,
              border: "none",
              cursor: "pointer",
            }}
          >
            <Typography sx={{ color: "#ffffff", fontWeight: "bold" }}>
              Reset Password
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Lado Direito: Banner Cinza padrão */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          background: "#f2eeee",
          flex: 1,
          height: "95vh",
          borderRadius: 6,
          m: 2,
        }}
      />
    </Box>
  );
};
