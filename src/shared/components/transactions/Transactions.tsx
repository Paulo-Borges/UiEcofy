import { Box, IconButton, Stack, Typography } from "@mui/material";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import TransactionsTable from "./TransactionsTable";

export default function Transactions() {
  return (
    <Stack
      sx={{
        mt: 4,
        mb: 4,
      }}
    >
      <Box
        component="div"
        sx={{
          display: "flex",
          width: "100%",
          // width: { xs: "100%", md: "100%" },
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
            Transactions
          </Typography>
          <Typography
            sx={{
              color: "#545454",
              fontSize: { xs: 12, md: 20 },
            }}
          >
            Your last transaction
          </Typography>
        </Box>

        <Box
          component="div"
          sx={{ display: "flex", gap: 1, alignItems: "center" }}
        >
          <Box
            component="div"
            sx={{ display: "flex", gap: 1, alignItems: "center" }}
          >
            <Box
              sx={{
                border: "1px solid",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
                padding: "4px 8px",
                borderColor: "#cdcac7",
                borderRadius: 4,
              }}
            >
              <IconButton sx={{ borderRadius: 0, gap: 1 }}>
                <DoneAllIcon />
                <Typography>Selected</Typography>
              </IconButton>
            </Box>
          </Box>
          <Box
            component="div"
            sx={{ display: "flex", gap: 1, alignItems: "center" }}
          >
            <Box
              sx={{
                border: "1px solid",
                display: { xs: "none", sm: "flex" },
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
                padding: "4px 8px",
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
      </Box>
      <TransactionsTable />
    </Stack>
  );
}
