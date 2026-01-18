import { CheckBox } from "@mui/icons-material";
import CreateIcon from "@mui/icons-material/Create";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {
  Avatar,
  Box,
  IconButton,
  Stack,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link as MuiLink } from "@mui/material";
import { Link as RouterLink } from "react-router";

interface IProductRowsProps {
  id: string;
  avatar: string;
  name: string;
  category: string;
  price: string;
  stock: number;
  status: "Published" | "Out of Stock" | "in Draft";
  created: string;
  action: React.ReactNode;
}

export const ProductRows: IProductRowsProps[] = [
  {
    id: "1",
    avatar: "src/assets/productHeadphone.png",
    name: "TWS Earphone m1",
    category: "Headphones",
    price: "$174.00",
    stock: 134,
    status: "Published",
    created: "14 mai 2025",
    action: (
      <Stack direction="row" spacing={1}>
        <IconButton
          size="small"
          color="success"
          onClick={() => console.log("Edit")}
        >
          <CreateIcon fontSize="small" />
        </IconButton>
        <IconButton
          size="small"
          color="error"
          onClick={() => console.log("Delete")}
        >
          <DeleteForeverIcon fontSize="small" />
        </IconButton>
      </Stack>
    ),
  },
  {
    id: "2",
    avatar: "src/assets/productHeadphone.png",
    name: "TWS Earphone m1",
    category: "Headphones",
    price: "$174.00",
    stock: 134,
    status: "Published",
    created: "14 mai 2025",
    action: (
      <Stack direction="row" spacing={1}>
        <IconButton size="small" onClick={() => console.log("Edit")}>
          <CreateIcon fontSize="small" />
        </IconButton>
        <IconButton
          size="small"
          color="error"
          onClick={() => console.log("Delete")}
        >
          <DeleteForeverIcon fontSize="small" />
        </IconButton>
      </Stack>
    ),
  },
];

export const Product: React.FC = () => {
  //   const theme = useTheme();
  //   const xsDown = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <TableBody>
      {ProductRows.map((ProductRow) => (
        <TableRow key={ProductRow.id}>
          <TableCell>
            <CheckBox />
          </TableCell>
          <TableCell>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar src={ProductRow.avatar} variant="rounded" />
              <MuiLink
                component={RouterLink}
                to={`/ProductDetails/${ProductRow.id}`}
                sx={{ textDecoration: "none" }}
              >
                <Typography
                //   whiteSpace="nowrap"
                //   textOverflow="ellipsis"
                //   overflow="hidden"
                >
                  {ProductRow.name}
                </Typography>
              </MuiLink>
            </Box>
          </TableCell>
          <TableCell>{ProductRow.category}</TableCell>
          <TableCell>{ProductRow.price}</TableCell>
          <TableCell sx={{ display: { xs: "none", md: "table-cell" } }}>
            {ProductRow.stock}
          </TableCell>
          <TableCell
            sx={{ display: { xs: "none", md: "table-cell" } }}
            color={
              ProductRow.status === "Published"
                ? "#41ca65"
                : ProductRow.status === "Out of Stock"
                  ? "#de3d3d"
                  : ProductRow.status === "in Draft"
                    ? "orange"
                    : "table-cell"
            }
          >
            {ProductRow.status}
          </TableCell>
          <TableCell sx={{ display: { xs: "none", md: "table-cell" } }}>
            {ProductRow.created}
          </TableCell>
          <TableCell>{ProductRow.action}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};
