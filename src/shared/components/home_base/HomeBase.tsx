import { Box, IconButton, Stack, Typography, useTheme } from "@mui/material";
import HoraExata from "../hora_exact/HoraExata";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

interface IHomeBaseProps {
  titulo: string;
}

export const HomeBase: React.FC<IHomeBaseProps> = ({ titulo }) => {
  const theme = useTheme();

  return (
    <Box width={theme.spacing(228)} padding={4}>
      <Stack
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
        direction="row"
      >
        <Box>
          <Typography sx={{ marginBottom: 2, color: "#545454" }}>
            Manage and track your business
          </Typography>
          <Typography
            sx={{ marginBottom: 2, fontWeight: "bold", fontSize: 25 }}
          >
            {titulo}
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              marginBottom: 2,
              bgcolor: "#ffffff",
              padding: 0,
              paddingRight: 4,
              borderRadius: 2,
              marginTop: 4,
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              color: "#545454",
            }}
          >
            <IconButton sx={{ color: "#545454" }}>
              <CalendarMonthIcon />
            </IconButton>
            11 Jan 2026, <HoraExata />
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};
