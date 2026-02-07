import { Box, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Help = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        justifyContent: "center",
        alignItems: "center",
        gap: 6,
        paddingTop: 7,
      }}
    >
      <MuiLink
        component={RouterLink}
        to="https://github.com/Paulo-Borges"
        underline="none"
        fontWeight={600}
        fontSize={84}
        sx={{
          color: "#000",
          transition: "0.3s", // Suaviza a mudança
          "&:hover": {
            color: "#1e1c1b91", // Muda a cor
            opacity: 0.8,
          },
        }}
      >
        Github
      </MuiLink>
      <MuiLink
        component={RouterLink}
        to="https://www.linkedin.com/in/paulo-borges-de-almeida-b543b3242/"
        underline="none"
        fontWeight={600}
        fontSize={84}
        sx={{
          color: "#000",
          transition: "0.3s", // Suaviza a mudança
          "&:hover": {
            color: "#1e1c1b91", // Muda a cor
            opacity: 0.8,
          },
        }}
      >
        Linkedin
      </MuiLink>
      <Typography fontSize={28} fontWeight="bold">
        (021)98614-9579 <WhatsAppIcon fontSize="medium" />
      </Typography>
      <Typography
        sx={{
          backgroundColor: "#F68605",
          color: "#fff",
          padding: 1,
          borderRadius: 2,
        }}
      >
        Estou aguardando o seu Contato
      </Typography>
    </Box>
  );
};

export default Help;
