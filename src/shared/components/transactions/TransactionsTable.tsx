import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, IconButton, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function createData(
  name: string,
  customer: string,
  email: string,
  total: number,
  status: string
) {
  return { name, customer, email, total, status };
}

const rows = [
  createData(
    "Senu Galaxy",
    "John Bushmill",
    "Johnb@mail.com",
    121.08,
    "Processing"
  ),
  createData(
    "Yarmin 13 Pro",
    "Ilham Budi Agung",
    "ilahmbudi@mail.com",
    590.15,
    "Processing"
  ),
  createData(
    "Sino D12 Mini S...",
    "Mohammad Karim",
    "m_karim@mail.com",
    125.25,
    "Canceled"
  ),
  createData(
    "Ekia eFutur Rac...",
    "Linda Blair",
    "lindablair@mail.com",
    148.45,
    "Shipping"
  ),
  createData(
    "Ekia Chair",
    "Josh Adam  ",
    "josh_adam@mail.com",
    81.99,
    "Delivered"
  ),
];

export default function TransactionsTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: { xs: "80%", md: "100%" } }} aria-label="table">
        <TableHead>
          {/* 1ª linha, linha de cabeçalho  */}
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="right">Customer</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right" sx={{}}>
                {row.customer}
                {row.email}
              </TableCell>
              <TableCell align="right">{row.total}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              {/* <TableCell align="right">{row.protein}</TableCell> */}
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
      >
        <Box>
          <Typography>Showing 1-5 from 15</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          <IconButton
            sx={{
              border: "1px solid",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
              padding: 1,
              borderColor: "#cdcac7",
              borderRadius: 2,
            }}
          >
            <ArrowBackIosIcon />
          </IconButton>
          <IconButton
            sx={{
              border: "1px solid",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
              padding: 1,
              background: "#000",
              color: "#fff",
              borderColor: "#cdcac7",
              borderRadius: 2,
            }}
          >
            1
          </IconButton>
          <IconButton
            sx={{
              border: "1px solid",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
              padding: 1,
              borderColor: "#cdcac7",
              borderRadius: 2,
            }}
          >
            2
          </IconButton>
          <IconButton
            sx={{
              border: "1px solid",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
              padding: 1,
              borderColor: "#cdcac7",
              borderRadius: 2,
            }}
          >
            3
          </IconButton>
          <IconButton
            sx={{
              border: "1px solid",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
              padding: 1,
              borderColor: "#cdcac7",
              borderRadius: 2,
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Box>
    </TableContainer>
  );
}
