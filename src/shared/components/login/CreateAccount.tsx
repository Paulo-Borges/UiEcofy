import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Link,
  TextField,
  Typography,
  Divider,
} from "@mui/material";
import { useState, useCallback } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

export const CreateAccount = ({ onBackToLogin }: any) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    username: "",
  });
  const [agreeTerms, setAgreeTerms] = useState(false);
  const navigate = useNavigate();

  // Atualização genérica de campos
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEntrar = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const { email, fullName, username } = formData;

      const isEmailValid = email.includes("@") && email.length > 5;
      const isFullValid = fullName.trim().length > 2;
      const isUserValid = username.trim().length > 2;

      if (isEmailValid && isFullValid && isUserValid && agreeTerms) {
        localStorage.setItem("@MeuApp:usuario", email);
        localStorage.setItem("@MeuApp:pessoa", username);
        localStorage.setItem("@MeuApp", fullName);
        navigate("/");
      } else {
        alert("Verifique os dados e aceite os termos.");
      }
    },
    [formData, agreeTerms, navigate],
  );

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            mb: 4,
            alignSelf: "flex-start",
          }}
        >
          <Avatar
            src="/src/assets/Group.svg"
            variant="square"
            sx={{ width: 32, height: 32 }}
          />
          <Typography variant="h6" fontWeight="bold">
            ECOFY
          </Typography>
        </Box>

        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Create account
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Start your 30-day free trial. Cancel anytime.
          </Typography>

          <Box
            component="form"
            onSubmit={handleEntrar}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <TextField
              label="Full Name"
              name="fullName"
              fullWidth
              variant="outlined"
              value={formData.fullName}
              onChange={handleChange}
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              fullWidth
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              label="Username"
              name="username"
              fullWidth
              variant="outlined"
              value={formData.username}
              onChange={handleChange}
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  color="primary"
                />
              }
              label={
                <Typography variant="body2">
                  By proceeding, you agree to the{" "}
                  <Link href="#" underline="hover" sx={{ color: "#f68605" }}>
                    Terms and Conditions
                  </Link>
                </Typography>
              }
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                py: 1.5,
                borderRadius: 2,
                mt: 2,
                backgroundColor: "#dadada",
                color: "#000",
                "&:hover": { backgroundColor: "#ccc" },
              }}
            >
              Create Account
            </Button>

            <Divider sx={{ my: 2 }}>OR</Divider>

            <Button
              variant="outlined"
              fullWidth
              startIcon={<GoogleIcon />}
              href="https://google.com"
              sx={{ py: 1.5, borderRadius: 2 }}
            >
              Sign in with Google
            </Button>

            <Button
              onClick={onBackToLogin}
              sx={{ mt: 1, textTransform: "none" }}
            >
              Already have an account? Sign in
            </Button>
          </Box>
        </Box>

        {/* Footer */}
        <Box
          sx={{
            mt: 8,
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            color: "text.secondary",
          }}
        >
          <Typography variant="caption">
            ©2025 Ecarto. All rights reserved.
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <HelpOutlineIcon fontSize="small" />
            <Link
              component={RouterLink}
              to="/help"
              variant="caption"
              color="inherit"
            >
              Get help
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
