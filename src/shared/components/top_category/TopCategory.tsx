import { Typography, Box, Stack, IconButton } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function categoryData(
  id: number,
  image: string,
  title: string,
  preco: number,
  sales: number,
  porcent: number
) {
  return { id, image, title, preco, sales, porcent };
}

const rows = [
  categoryData(
    1,
    "../../../src/assets/mouse.png",
    "Smart Watch",
    24.501,
    140,
    8
  ),
  categoryData(
    2,
    "../../../src/assets/relogio.png",
    "A1 Mouse",
    4.345,
    285,
    10
  ),

  categoryData(3, "../../../src/assets/camera.png", "4D Camera", 1.2, 24, 7),
  categoryData(
    4,
    "../../../src/assets/mouseBranco.png",
    "G55 Mouse",
    780,
    176,
    8.4
  ),
  categoryData(
    5,
    "../../../src/assets/phone.png",
    "120z Headphone",
    1.902,
    192,
    11.2
  ),
  categoryData(
    6,
    "../../../src/assets/copo.png",
    "Portable Spesker",
    860,
    86,
    14
  ),
  categoryData(
    7,
    "../../../src/assets/cadeira.png",
    "Rocking Chair",
    260,
    18,
    10
  ),
  categoryData(
    8,
    "../../../src/assets/earphone.png",
    "Earphone",
    1.12,
    112,
    6.5
  ),
  categoryData(9, "../../../src/assets/hat.png", "Hat", 680, 68, 8.8),
];

export default function TopCategory() {
  return (
    <Stack
      component="div"
      sx={{
        backgroundColor: "#ffffff",
        borderRadius: 6,
        padding: 2,
        marginBottom: 4,
        width: "100%",
      }}
    >
      <Box
        component="div"
        sx={{
          display: "flex",
          width: "100%",
          // width: { xs: "80%", sm: "100%", md: "100%" },
          justifyContent: "space-between",
          backgroundColor: "#ffffff",
          borderRadius: 2,
          padding: 2,
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "#121212",
              fontWeight: "semiBold",
              fontSize: { xs: 18, md: 28 },
            }}
          >
            Top Category
          </Typography>
          <Typography
            sx={{
              color: "#545454",
              fontSize: { xs: 12, md: 20 },
              marginRight: 8,
            }}
          >
            Best selling category
          </Typography>
        </Box>

        <Box
          component="div"
          sx={{ display: "flex", gap: 1, alignItems: "center" }}
        >
          <Box
            component="div"
            sx={{ display: "flex", gap: 1, alignItems: "center" }}
          ></Box>
          <Box
            component="div"
            sx={{ display: "flex", gap: 1, alignItems: "center" }}
          >
            <Box
              sx={{
                border: "1px solid #d7d3d3",
                display: { xs: "none", sm: "flex" },
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
                padding: "4px 8px",
                borderRadius: 4,
              }}
            >
              <IconButton sx={{ borderRadius: 0 }}>
                <OpenInFullIcon />
              </IconButton>
              <IconButton sx={{ borderRadius: 0 }}>
                <MoreVertIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>

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
                borderRadius: 4,
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
