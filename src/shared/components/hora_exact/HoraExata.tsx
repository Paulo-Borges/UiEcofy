import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";

const HoraExata = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // 2. Configura o intervalo para atualizar o estado a cada segundo
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Limpa o intervalo quando o componente for desmontado
    return () => clearInterval(timerId);
  }, []); // O array de dependências vazio garante que o efeito rode apenas uma vez na montagem

  // 3. Formata a hora para exibição (ex: "18:30")
  const timeString = currentTime.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Box sx={{ p: 1 }}>
      {/* 4. Usa o componente Typography do MUI para exibir a hora */}
      <Typography variant="h6" sx={{ fontSize: "1rem", fontWeight: 400 }}>
        {timeString}
      </Typography>
    </Box>
  );
};

export default HoraExata;
