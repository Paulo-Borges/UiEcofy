import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

function createData(
  id: number,
  customerName: string,
  phone: number,
  orders: number,
  balance: number,
  status: string,
  added: string
) {
  return { id, customerName, phone, orders, balance, status, added };
}

const rows = [
  createData(
    1,
    "John Bushmill",
    7850548877,
    124,
    121.0,
    "Offline",
    "29 Dec 2022"
  ),
  createData(
    2,
    "Laura Prichet",
    2153023376,
    45,
    590.0,
    "Online",
    "24 Dec 2022"
  ),
  createData(
    3,
    "Mohammad Karim",
    7850548877,
    32,
    121.0,
    "Offline",
    "12 Dec 2022"
  ),
  createData(4, "Josh Bill", 7850548877, 99, 121.0, "Offline", "21 Dec 2022"),
  createData(5, "Josh Adam", 7850548877, 100, 121.0, "Offline", "21 Sep 2022"),
  createData(6, "Sin Tae", 7850548877, 431, 121.0, "Offline", "21 Dec 2022"),
  createData(
    7,
    "Rajesh Masvidal",
    7850548877,
    36,
    121.0,
    "Offline",
    "19 Sep 2022"
  ),
  createData(8, "Fajar Surya", 7850548877, 77, 121.0, "Offline", "19 Dec 2022"),
  createData(9, "Lisa Greg", 7850548877, 89, 121.0, "Offline", "10 Dec 2022"),
  createData(
    10,
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
    <TableContainer component={Paper} sx={{ marginTop: 5 }}>
      <Table sx={{ minWidth: 450 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>customerName</TableCell>
            <TableCell align="right">phone</TableCell>
            <TableCell align="right">orders</TableCell>
            <TableCell align="right">balance</TableCell>
            <TableCell align="right">status</TableCell>
            <TableCell align="right">added</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.customerName}
              </TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell>{row.orders}</TableCell>
              <TableCell>{row.balance}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.added}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomerTable;
