import {
  Avatar,
  Box,
  Icon,
  IconButton,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TopCategory from "../top_category/TopCategory";

export const ReportsStatic = () => {
  const theme = useTheme();

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        width: "100",
        paddingX: 3,
        justifyContent: "flex-start",
        gap: 4,
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box sx={{ width: { lg: 700, xs: 385 } }}>
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
                fontSize: { xs: 14, md: 24 },
              }}
            >
              Statistic
            </Typography>
            <Typography
              sx={{
                color: "#545454",
                fontSize: { xs: 8, md: 16 },
              }}
            >
              Income vs expenses
            </Typography>
          </Box>
          <Box
            component="div"
            sx={{ display: "flex", gap: 1, alignItems: "center" }}
          >
            <Box
              component="div"
              sx={{
                paddingY: 1,
                border: "0.1px solid",
                borderColor: "#cdcac7",
                borderRadius: 4,
              }}
            >
              <IconButton sx={{ borderRadius: 0 }}>
                <Typography
                  sx={{
                    color: "#545454",
                    fontSize: { xs: 8, md: 16 },
                  }}
                >
                  Daily
                </Typography>
              </IconButton>
              <IconButton sx={{ borderRadius: 0 }}>
                <Typography
                  sx={{
                    color: "#545454",
                    fontSize: { xs: 8, md: 16 },
                  }}
                >
                  Weekly
                </Typography>
              </IconButton>
              <IconButton sx={{ borderRadius: 0 }}>
                <Typography
                  sx={{
                    background: "#f68605",
                    color: "#ffffff",
                    p: 1,
                    borderRadius: 2,
                    fontSize: { xs: 8, md: 16 },
                  }}
                >
                  Monthly
                </Typography>
              </IconButton>
            </Box>
            <Box
              sx={{
                border: "1px solid",
                padding: "14px 8px",
                display: { xs: "none", md: "flex" },
                borderColor: "#cdcac7",
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
        <Box>
          <Avatar
            alt="Grafico de estatísticas"
            src="../../../src/assets/Body.png"
            variant="square"
            sx={{
              width: "100%",
              // width: { xs: "100%", sm: "100%", md: "100%" },
              height: "auto",
              backgroundColor: "#ffffff",
            }}
          ></Avatar>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 4,
          }}
        >
          <Box component={Paper} sx={{ display: "flex", padding: 2 }}>
            <Box sx={{ display: "flex", gap: 1 }} width={theme.spacing(35)}>
              <Typography>Top Campaign Types</Typography>
              <Icon>info-outline</Icon>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Typography color="#666666">Monthly</Typography>
              <Icon>seta</Icon>
            </Box>
          </Box>
          <Box component={Paper} sx={{ display: "flex", padding: 2 }}>
            <Box
              sx={{ display: "flex", justifyContent: "space-between" }}
              width={theme.spacing(30)}
            >
              <Typography>Customer Age Rates</Typography>
              <Icon>more</Icon>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: { lg: 705, xs: 385 } }}>
        <TopCategory />
      </Box>
    </Box>
  );
};
