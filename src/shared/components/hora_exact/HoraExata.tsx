import { useState, useEffect } from "react";
import { Box } from "@mui/material";

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

  // 1. Você cria o formatador (instancia uma vez só)
  const timeFormatter = new Intl.DateTimeFormat("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  // 2. Você usa o formatador sempre que precisar
  const timeString = timeFormatter.format(new Date());

  return (
    <Box sx={{ padding: 1 }}>
      <Box sx={{ fontSize: 16, fontWeight: 400 }}>{timeString}</Box>
    </Box>
  );
};

export default HoraExata;
