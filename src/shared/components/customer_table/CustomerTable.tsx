import {
  Avatar,
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Checkbox from "@mui/material/Checkbox";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function createData(
  id: number,
  imagem: string,
  customerName: string,
  phone: number,
  orders: number,
  balance: number,
  status: string,
  added: string
) {
  return { id, imagem, customerName, phone, orders, balance, status, added };
}

const rows = [
  createData(
    1,
    "../../../src/assets/img1.png",
    "John Bushmill",
    7850548877,
    124,
    121.0,
    "Offline",
    "29 Dec 2022"
  ),
  createData(
    2,
    "../../../src/assets/img2.png",
    "Laura Prichet",
    2153023376,
    45,
    590.0,
    "Online",
    "24 Dec 2022"
  ),
  createData(
    3,
    "../../../src/assets/img3.png",
    "Mohammad Karim",
    7850548877,
    32,
    121.0,
    "Offline",
    "12 Dec 2022"
  ),
  createData(
    4,
    "../../../src/assets/img4.png",
    "Josh Bill",
    7850548877,
    99,
    121.0,
    "Offline",
    "21 Dec 2022"
  ),
  createData(
    5,
    "../../../src/assets/img5.png",
    "Josh Adam",
    7850548877,
    100,
    121.0,
    "Offline",
    "21 Sep 2022"
  ),
  createData(
    6,
    "../../../src/assets/img6.png",
    "Sin Tae",
    7850548877,
    431,
    121.0,
    "Offline",
    "21 Dec 2022"
  ),
  createData(
    7,
    "../../../src/assets/img7.png",
    "Rajesh Masvidal",
    7850548877,
    36,
    121.0,
    "Offline",
    "19 Sep 2022"
  ),
  createData(
    8,
    "../../../src/assets/img8.png",
    "Fajar Surya",
    7850548877,
    77,
    121.0,
    "Offline",
    "19 Dec 2022"
  ),
  createData(
    9,
    "../../../src/assets/img9.png",
    "Lisa Greg",
    7850548877,
    89,
    121.0,
    "Offline",
    "10 Dec 2022"
  ),
  createData(
    10,
    "../../../src/assets/img10.png",
    "Linda Blair",
    7850548877,
    107,
    121.0,
    "Offline",
    "29 Aug 2022"
  ),
];

const CustomerTable = () => {
  return (
    <TableContainer component={Paper} sx={{ marginTop: 5, borderRadius: 6 }}>
      <Table sx={{ minWidth: 450 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow sx={{ height: 56 }}>
            <TableCell>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Checkbox />
                Customer Name
                <KeyboardArrowDownIcon />
              </Box>
            </TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "end",
                }}
              >
                Orders
                <KeyboardArrowDownIcon />
              </Box>
            </TableCell>
            <TableCell align="right">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "end",
                }}
              >
                Balance
                <KeyboardArrowDownIcon />
              </Box>
            </TableCell>
            <TableCell align="right">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "end",
                }}
              >
                Status
                <KeyboardArrowDownIcon />
              </Box>
            </TableCell>
            <TableCell align="right">Added</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{
                height: 78,
              }}
              hover
            >
              <TableCell component="th" scope="row">
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Avatar
                    src={row.imagem}
                    variant="rounded"
                    sx={{ width: 40, height: 40, bgcolor: "#f5f5f5" }}
                  />
                  <Typography>{row.customerName}</Typography>
                </Box>
              </TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.orders}</TableCell>
              <TableCell align="right">{row.balance}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.added}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="body2" color="textSecondary">
          Showing 1-10 from 100
        </Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton
            size="small"
            sx={{ border: "1px solid #eee", borderRadius: 1 }}
          >
            <ArrowBackIosIcon fontSize="inherit" />
          </IconButton>
          {[1, 2, 3, 4, 5, 6].map((page) => (
            <IconButton
              key={page}
              size="small"
              sx={{
                width: 32,
                height: 32,
                fontSize: "0.875rem",
                borderRadius: 1,
                border: "1px solid #eee",
                bgcolor: page === 1 ? "#f47522" : "transparent",
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
};

export default CustomerTable;
