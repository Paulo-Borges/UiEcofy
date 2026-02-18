import { Avatar, Box, InputBase, InputLabel, Typography } from "@mui/material";
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
    <Box sx={{ display: "flex", background: "#f8f2f2", padding: 2 }}>
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
          flexDirection: "column",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 400,
            background: "#ffffff",
            padding: 4,
            borderRadius: 6,
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", mb: 1, fontSize: 24, paddingLeft: 10 }}
          >
            Reset Your Password
          </Typography>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              mb: 4,
              color: "gray",
              fontSize: 14,
              width: 300,
              paddingLeft: 5,
            }}
          >
            Enter Your Email Address and we’ll sand you password reset
            Instructions.
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
            <Typography sx={{ color: "#ffffff", fontWeight: 100 }}>
              Verify
            </Typography>
          </Box>

          <Box
            onClick={onBack}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
              marginTop: 4,
              color: "#666d80",
            }}
          >
            <Typography variant="body2">Don’t have access anymore?</Typography>
            <Typography sx={{ color: "#f68605" }} variant="body2">
              Try another method
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
