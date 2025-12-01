import { Avatar, Box, Stack, Typography } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

export default function SmallStatistic() {
  return (
    <div>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 2,
          mt: 4,
          mb: 4,
        }}
      >
        <Box
          sx={{
            backgroundColor: "#ffffff",
            p: 2,
            borderRadius: 2,
            height: 155,
            width: 270,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 2,
            }}
          >
            <Typography sx={{ fontWeight: "semibold", fontSize: 24 }}>
              Active Sales
            </Typography>
            <Avatar
              alt="logo do Ecofy"
              src="./src/assets/Solid Circle Azul.png"
              variant="circular"
            ></Avatar>
          </Box>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: 38,
              display: "flex",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            10,250
          </Typography>
          <Typography
            sx={{
              fontWeight: "semiBold",
              fontSize: 18,
              display: "flex",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ color: "#11b14b" }}>
              10% <TrendingUpIcon />
            </Box>
            +$142
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "#ffffff",
            p: 2,
            borderRadius: 2,
            height: 155,
            width: 270,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 2,
            }}
          >
            <Typography sx={{ fontWeight: "semibold", fontSize: 24 }}>
              Revenue
            </Typography>
            <Avatar
              alt="logo do Ecofy"
              src="./src/assets/Solid Circle Verde.png"
              variant="circular"
            ></Avatar>
          </Box>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: 38,
              display: "flex",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            $80,428
          </Typography>
          <Typography
            sx={{
              fontWeight: "semiBold",
              fontSize: 18,
              display: "flex",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ color: "#11b14b" }}>
              10% <TrendingUpIcon />
            </Box>
            +$142
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "#ffffff",
            p: 2,
            borderRadius: 2,
            height: 155,
            width: 270,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 2,
            }}
          >
            <Typography sx={{ fontWeight: "semibold", fontSize: 24 }}>
              Orders
            </Typography>
            <Avatar
              alt="logo do Ecofy"
              src="./src/assets/Solid Circle laranja.png"
              variant="circular"
            ></Avatar>
          </Box>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: 38,
              display: "flex",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            55,780
          </Typography>
          <Typography
            sx={{
              fontWeight: "semiBold",
              fontSize: 18,
              display: "flex",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ color: "#11b14b" }}>
              10% <TrendingUpIcon />
            </Box>
            +$142
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "#ffffff",
            p: 2,
            borderRadius: 2,
            height: 155,
            width: 270,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 2,
            }}
          >
            <Typography sx={{ fontWeight: "semibold", fontSize: 24 }}>
              Customers
            </Typography>
            <Avatar
              alt="logo do Ecofy"
              src="./src/assets/Solid Circle Roxo.png"
              variant="circular"
            ></Avatar>
          </Box>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: 38,
              display: "flex",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            110,425
          </Typography>
          <Typography
            sx={{
              fontWeight: "semiBold",
              fontSize: 18,
              display: "flex",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ color: "#11b14b" }}>
              10% <TrendingUpIcon />
            </Box>
            +$142
          </Typography>
        </Box>
      </Stack>
    </div>
  );
}
