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
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function createData(
  id: number,
  image: string,
  name: string,
  customer: string,
  email: string,
  total: number,
  status: string
) {
  return { id, image, name, customer, email, total, status };
}

const rows = [
  createData(
    1,
    "../../../src/assets/senuGalaxy.png",
    "Senu Galaxy",
    "John Bushmill",
    "Johnb@mail.com",
    121.08,
    "Processing"
  ),
  createData(
    2,
    "../../../src/assets/yarmin13Pro.png",
    "Yarmin 13 Pro",
    "Ilham Budi Agung",
    "ilahmbudi@mail.com",
    590.15,
    "Processing"
  ),
  createData(
    3,
    "../../../src/assets/sinod12.png",
    "Sino D12 Mini S...",
    "Mohammad Karim",
    "m_karim@mail.com",
    125.25,
    "Canceled"
  ),
  createData(
    4,
    "../../../src/assets/Ekia.png",
    "Ekia eFutur Rac...",
    "Linda Blair",
    "lindablair@mail.com",
    148.45,
    "Shipping"
  ),
  createData(
    5,
    "../../../src/assets/EkiaChair.png",
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
      <Table
        sx={{ width: { xs: "60%", sm: "80%", md: "100%" } }}
        aria-label="table"
      >
        <TableHead sx={{ backgroundColor: "#f8f8fa" }}>
          {/* 1ª linha, linha de cabeçalho  */}
          <TableRow>
            <TableCell align="right">
              Product
              <IconButton>
                <KeyboardArrowDownIcon />
              </IconButton>
            </TableCell>
            <TableCell align="right">Customer</TableCell>
            <TableCell align="right">
              Total
              <IconButton>
                <KeyboardArrowDownIcon />
              </IconButton>
            </TableCell>
            <TableCell
              align="right"
              sx={{ display: { xs: "none", sm: "flex" } }}
            >
              Status
            </TableCell>
            <TableCell>
              <IconButton>
                <KeyboardArrowDownIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <Box>
                <img
                  src={row.image}
                  alt={row.name}
                  style={{ width: 50, marginLeft: 16, paddingTop: 18 }}
                />
              </Box>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right" sx={{}}>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}
                >
                  {row.customer}
                  {row.email}
                </Box>
              </TableCell>
              <TableCell align="right">{row.total}</TableCell>
              <TableCell
                align="right"
                sx={{ display: { xs: "none", sm: "flex" } }}
              >
                {row.status}
              </TableCell>
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
