import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { TableSortLabel } from "@mui/material";

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

export default function TransactionsTable() {
  return (
    <Stack component={Paper}>
      <Box
        sx={{ width: { xs: "60%", sm: "80%", md: "100%" } }}
        aria-label="table"
      >
        <Stack sx={{ backgroundColor: "#f8f8fa", padding: 2, paddingLeft: 4 }}>
          {/* 1ª linha, linha de cabeçalho  */}
          <TableRow sx={{ display: "flex", gap: { sm: 20, md: 8 } }}>
            <TableSortLabel>
              <Typography>Product</Typography>
              <IconButton>
                <KeyboardArrowDownIcon />
              </IconButton>
            </TableSortLabel>

            <TableSortLabel sx={{ marginLeft: 6, marginRight: 6 }}>
              <Typography>Customer</Typography>
            </TableSortLabel>

            <TableSortLabel
              sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
            >
              <Typography>Total</Typography>
              <IconButton>
                <KeyboardArrowDownIcon />
              </IconButton>
            </TableSortLabel>

            <TableSortLabel
              sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
            >
              <Typography>Status</Typography>
              <IconButton>
                <KeyboardArrowDownIcon />
              </IconButton>
            </TableSortLabel>

            {/* <TableSortLabel>
              <IconButton>
                <KeyboardArrowDownIcon />
              </IconButton>
            </TableSortLabel> */}
          </TableRow>
        </Stack>
        <Box>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{
                display: "flex",
                alignContent: "center",
                justifyItems: "end",
                gap: 5,
              }}
            >
              <Box>
                <img
                  src={row.image}
                  alt={row.name}
                  style={{
                    width: 50,
                    marginTop: 16,
                    marginLeft: 16,
                    paddingTop: 1,
                  }}
                />
              </Box>
              <Typography>{row.name}</Typography>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  marginLeft: 6,
                  marginRight: 6,
                }}
              >
                {row.customer}
              </Typography>
              <Typography
                sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
              >
                {row.total}
              </Typography>
              <Typography
                sx={{
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "flex",
                    paddingLeft: 20,
                  },
                }}
              >
                {row.status}
              </Typography>
              <Divider />
            </TableRow>
          ))}
        </Box>
      </Box>
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
    </Stack>
  );
}
