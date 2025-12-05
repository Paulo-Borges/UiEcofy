import { Typography, Box, Stack } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

function categoryData(
  image: string,
  title: string,
  preco: number,
  sales: number,
  porcent: number
) {
  return { image, title, preco, sales, porcent };
}

const rows = [
  categoryData(
    "../../../src/assets/relogio.png",
    "Smart Watch",
    24.501,
    140,
    8
  ),
];

export default function TopCategory() {
  return (
    <Stack
      component="div"
      sx={{
        backgroundColor: "#ffffff",
      }}
    >
      {rows.map((row) => (
        <Box
          key={row.title}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Box component="div">
            <img
              src={row.image}
              alt={row.title}
              style={{
                width: 80,
                height: 80,
                objectFit: "cover", // Garante que a imagem preencha o Box
                borderRadius: 4, // Opcional: bordas arredondadas
              }}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
              {row.title}
            </Typography>
            <Typography sx={{ fontSize: 18, color: "#545454" }}>
              {row.sales} sales
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
              $ {row.preco}
            </Typography>
            <Typography
              sx={{
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                color: "#4caf50",
              }}
            >
              {row.porcent} % <TrendingUpIcon />
            </Typography>
          </Box>
        </Box>
      ))}
    </Stack>
  );
}
