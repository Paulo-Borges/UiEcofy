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
import { Link as MuiLink } from "@mui/material";
import { Link as RouterLink } from "react-router";

interface IRowsProps {
  id: string;
  imagem: string;
  customerName: string;
  phone: number;
  orders: number;
  balance: number;
  status: string;
  added: string;
}

export const rows: IRowsProps[] = [
  {
    id: "1",
    imagem: "../../../src/assets/img1.png",
    customerName: "John Bushmill",
    phone: 7850548877,
    orders: 124,
    balance: 121.0,
    status: "Offline",
    added: "29 Dec 2022",
  },
  {
    id: "2",
    imagem: "../../../src/assets/img2.png",
    customerName: "Laura Prichet",
    phone: 2153023376,
    orders: 45,
    balance: 590.0,
    status: "Online",
    added: "24 Dec 2022",
  },
  {
    id: "3",
    imagem: "../../../src/assets/img3.png",
    customerName: "Mohammad Karim",
    phone: 7850548877,
    orders: 32,
    balance: 121.0,
    status: "Offline",
    added: "12 Dec 2022",
  },
  {
    id: "4",
    imagem: "../../../src/assets/img4.png",
    customerName: "Josh Bill",
    phone: 7850548877,
    orders: 99,
    balance: 121.0,
    status: "Offline",
    added: "21 Dec 2022",
  },
  {
    id: "5",
    imagem: "../../../src/assets/img5.png",
    customerName: "Josh Adam",
    phone: 7850548877,
    orders: 100,
    balance: 121.0,
    status: "Offline",
    added: "21 Sep 2022",
  },
  {
    id: "6",
    imagem: "../../../src/assets/img6.png",
    customerName: "Sin Tae",
    phone: 7850548877,
    orders: 431,
    balance: 121.0,
    status: "Offline",
    added: "21 Dec 2022",
  },
  {
    id: "7",
    imagem: "../../../src/assets/img7.png",
    customerName: "Rajesh Masvidal",
    phone: 7850548877,
    orders: 36,
    balance: 121.0,
    status: "Offline",
    added: "19 Sep 2022",
  },
  {
    id: "8",
    imagem: "../../../src/assets/img8.png",
    customerName: "Fajar Surya",
    phone: 7850548877,
    orders: 77,
    balance: 121.0,
    status: "Offline",
    added: "19 Dec 2022",
  },
  {
    id: "9",
    imagem: "../../../src/assets/img9.png",
    customerName: "Lisa Greg",
    phone: 7850548877,
    orders: 89,
    balance: 121.0,
    status: "Offline",
    added: "10 Dec 2022",
  },
  {
    id: "10",
    imagem: "../../../src/assets/img10.png",
    customerName: "Linda Blair",
    phone: 7850548877,
    orders: 107,
    balance: 121.0,
    status: "Offline",
    added: "29 Aug 2022",
  },
];

const CustomerTable: React.FC = () => {
  return (
    <TableContainer component={Paper} sx={{ marginTop: 5, borderRadius: 6 }}>
      <Table>
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
            <TableCell
              align="right"
              sx={{ display: { xs: "none", md: "table-cell" } }}
            >
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
            <TableCell
              align="right"
              sx={{ display: { xs: "none", md: "table-cell" } }}
            >
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
            <TableCell
              align="right"
              sx={{ display: { xs: "none", md: "table-cell" } }}
            >
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
            <TableCell
              align="right"
              sx={{ display: { xs: "none", md: "table-cell" } }}
            >
              Added
            </TableCell>
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
                  <Checkbox />
                  <MuiLink component={RouterLink} to={`/details/${row.id}`}>
                    <Avatar
                      src={row.imagem}
                      variant="rounded"
                      sx={{ width: 40, height: 40, bgcolor: "#f5f5f5" }}
                    />
                  </MuiLink>

                  <MuiLink component={RouterLink} to={`/details/${row.id}`}>
                    {row.customerName}
                  </MuiLink>
                </Box>
              </TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell
                align="right"
                sx={{ display: { xs: "none", md: "table-cell" } }}
              >
                {row.orders}
              </TableCell>
              <TableCell
                align="right"
                sx={{ display: { xs: "none", md: "table-cell" } }}
              >
                {row.balance}
              </TableCell>
              <TableCell
                align="right"
                sx={{ display: { xs: "none", md: "table-cell" } }}
              >
                {row.status}
              </TableCell>
              <TableCell
                align="right"
                sx={{ display: { xs: "none", md: "table-cell" } }}
              >
                {row.added}
              </TableCell>
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
