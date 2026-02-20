import {
  Avatar,
  Box,
  IconButton,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TopCategory from "../top_category/TopCategory";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ErrorOutlineSharpIcon from "@mui/icons-material/ErrorOutlineSharp";
import MoreVertSharpIcon from "@mui/icons-material/MoreVertSharp";

export const ReportsStatic = () => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const lgDown = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        width: "100%",
        paddingX: 3,
        justifyContent: "flex-start",
        gap: 4,
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box sx={{ width: { lg: 600, xs: 385 } }}>
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
          display="flex"
          flexDirection={smDown ? "column" : lgDown ? "column" : "row"}
          gap={theme.spacing(4)}
          sx={{
            justifyContent: "space-between",
            marginTop: 4,
          }}
        >
          <Box component={Paper} sx={{ borderRadius: 5, gap: 5 }}>
            <Box
              sx={{
                display: "flex",
                padding: 2,
                marginTop: 2,
                marginBottom: 2,
              }}
            >
              <Box sx={{ display: "flex", gap: 1 }} width={theme.spacing(35)}>
                <Typography sx={{ fontWeight: "bold" }}>
                  Top Campaign Types
                </Typography>
                <ErrorOutlineSharpIcon />
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography color="#666666">Monthly</Typography>
                <ExpandMoreIcon />
              </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Avatar
                alt="Grafico de types"
                src="../../../src/assets/reportTypes.png"
                variant="square"
                sx={{
                  width: 190,
                  height: 190,
                  marginTop: 2,
                  marginBottom: 4,
                }}
              ></Avatar>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                marginLeft: 10,
                gap: 2,
                marginTop: 2,
              }}
            >
              <Brightness1Icon color="success" />
              <Typography>Whatsapp (40.1%)</Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                marginLeft: 10,
                gap: 2,
                marginTop: 2,
              }}
            >
              <Brightness1Icon color="warning" />
              <Typography>Email (25%)</Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                marginLeft: 10,
                gap: 2,
                marginTop: 2,
              }}
            >
              <Brightness1Icon color="error" />
              <Typography>SMS (6.1%)</Typography>
            </Box>
          </Box>
          <Box
            component={Paper}
            sx={{
              display: "flex",
              padding: 2,
              flexDirection: "column",
              borderRadius: 5,
            }}
          >
            <Box
              sx={{ display: "flex", justifyContent: "space-between" }}
              width={theme.spacing(30)}
            >
              <Typography sx={{ fontWeight: "bold", marginBottom: 4 }}>
                Customer Age Rates
              </Typography>
              <MoreVertSharpIcon />
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Avatar
                alt="Grafico de types"
                src="../../../src/assets/reportRates.png"
                variant="square"
                sx={{
                  width: 190,
                  height: 190,
                  marginTop: 3,
                }}
              ></Avatar>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box width="100%">
        <TopCategory />
      </Box>
    </Box>
  );
};
