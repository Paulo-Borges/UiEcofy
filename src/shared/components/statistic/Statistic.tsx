import { Avatar, Box, IconButton, Typography } from "@mui/material";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Transactions from "../transactions/Transactions";

export default function Statistic() {
  // const theme = useTheme();
  // const smDown = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box>
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
        <Transactions />
      </Box>
    </Box>
  );
}
