import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Box,
  IconButton,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  Typography,
  Avatar,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function createData(
  id: number,
  image: string,
  name: string,
  customer: string,
  total: number,
  status: string
) {
  return { id, image, name, customer, total, status };
}

const rows = [
  createData(
    1,
    "../../../src/assets/senuGalaxy.png",
    "Senu Galaxy",
    "John Bushmill",
    121.08,
    "Processing"
  ),
  createData(
    2,
    "../../../src/assets/yarmin13Pro.png",
    "Yarmin 13 Pro",
    "Ilham Budi Agung",
    590.15,
    "Processing"
  ),
  createData(
    3,
    "../../../src/assets/sinod12.png",
    "Sino D12 Mini S...",
    "Mohammad Karim",
    125.25,
    "Canceled"
  ),
  createData(
    4,
    "../../../src/assets/Ekia.png",
    "Ekia eFutur Rac...",
    "Linda Blair",
    148.45,
    "Shipping"
  ),
  createData(
    5,
    "../../../src/assets/EkiaChair.png",
    "Ekia Chair",
    "Josh Adam  ",
    81.99,
    "Delivered"
  ),
];

interface StatusProps {
  status: string;
}

const StatusChip: React.FC<StatusProps> = ({ status }) => {
  let backgroundColor: string;
  let textColor: string;
  let borderColor: string;

  if (status === "Processing") {
    backgroundColor = "#fff1e9";
    textColor = "#f47522";
    borderColor = "#fdd4ba";
  } else if (status === "Canceled") {
    backgroundColor = "#fceae8";
    textColor = "#e52b16";
    borderColor = "#f7bbd7";
  } else if (status === "Shipping") {
    backgroundColor = "#e6foff";
    textColor = "#0167ff";
    borderColor = "#b0d0ff";
  } else if (status === "Delivered") {
    backgroundColor = "#e7f7ed";
    textColor = "#0fa144";
    borderColor = "#b5e7c7";
  } else {
    backgroundColor = "#e0e0e0";
    textColor = "#616161";
    borderColor = "#fdd4ba";
  }
  return (
    <Box
      sx={{
        // Estilos para transformar em um "chip"
        backgroundColor: backgroundColor,
        color: textColor,
        borderRadius: 2, // Borda arredondada
        padding: "4px 12px", // Espaçamento interno
        display: "inline-block", // Para que o Box se ajuste ao conteúdo
        fontWeight: "bold",
        fontSize: "0.8rem",
        minWidth: "80px",
        textAlign: "center",
        border: `1px solid ${borderColor}`,
        textTransform: "capitalize",
      }}
    >
      {status}
    </Box>
  );
};

export default function TransactionsTable() {
  return (
    <TableContainer
      component={Paper}
      sx={{ boxShadow: "none", border: "1px solid #eee" }}
    >
      <Table sx={{ width: "100%" }} aria-label="table">
        <TableHead
          sx={{
            backgroundColor: "#f8f8fa",
          }}
        >
          <TableRow sx={{}}>
            <TableCell sx={{ fontWeight: "bold" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                Product
                <KeyboardArrowDownIcon fontSize="small" />
              </Box>
            </TableCell>

            <TableCell align="left" sx={{ fontWeight: "bold" }}>
              Customer
            </TableCell>

            <TableCell
              align="right"
              sx={{
                fontWeight: "bold",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                Total
                <KeyboardArrowDownIcon fontSize="small" />
              </Box>
            </TableCell>

            <TableCell align="right">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                Status
                <KeyboardArrowDownIcon fontSize="small" />
              </Box>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} hover>
              <TableCell>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Avatar
                    src={row.image}
                    variant="rounded"
                    sx={{ width: 40, height: 40, bgcolor: "#f5f5f5" }}
                  />
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    {row.name}
                  </Typography>
                </Box>
              </TableCell>

              <TableCell align="left">
                <Typography variant="body2" color="textSecondary">
                  {row.customer}
                </Typography>
              </TableCell>

              <TableCell align="right">
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                  ${row.total.toFixed(2)}
                </Typography>
              </TableCell>

              <TableCell align="right">
                <StatusChip status={row.status} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box
        sx={{
          margin: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      ></Box>
      <Box
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="body2" color="textSecondary">
          Showing 1-5 from 15
        </Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton
            size="small"
            sx={{ border: "1px solid #eee", borderRadius: 1 }}
          >
            <ArrowBackIosIcon fontSize="inherit" />
          </IconButton>
          {[1, 2, 3].map((page) => (
            <IconButton
              key={page}
              size="small"
              sx={{
                width: 32,
                height: 32,
                fontSize: "0.875rem",
                borderRadius: 1,
                border: "1px solid #eee",
                bgcolor: page === 1 ? "black" : "transparent",
                color: page === 1 ? "white" : "inherit",
                "&:hover": { bgcolor: page === 1 ? "#333" : "#f5f5f5" },
              }}
            >
              {page}
            </IconButton>
          ))}
          <IconButton
            size="small"
            sx={{ border: "1px solid #eee", borderRadius: 1 }}
          >
            <ArrowForwardIosIcon fontSize="inherit" />
          </IconButton>
        </Box>
      </Box>
    </TableContainer>
  );
}
