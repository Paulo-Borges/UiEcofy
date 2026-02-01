import {
  Box,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import HoraExata from "../hora_exact/HoraExata";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

interface IHomeBaseProps {
  titulo: string;
}

export const HomeBase: React.FC<IHomeBaseProps> = ({ titulo }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box width={theme.spacing("auto")} padding={4}>
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
        <Box display={smDown ? "none" : "flex"}>
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
            01 Fev 2026, <HoraExata />
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};
