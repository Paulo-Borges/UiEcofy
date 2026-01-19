import { CheckBox } from "@mui/icons-material";

import { Avatar, Box, TableBody, TableCell, TableRow } from "@mui/material";
import { Link as MuiLink } from "@mui/material";
import { Link as RouterLink } from "react-router";
import { Icones } from "../Icones";

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
    name: "Headphone G1",
    category: "Headphones",
    price: "$174.00",
    stock: 134,
    status: "Published",
    created: "14 mai 2025",
    action: <Icones />,
  },
  {
    id: "2",
    avatar: "src/assets/productTWSm1.png",
    name: "TWS Earphone m1",
    category: "Headphones",
    price: "$40.00",
    stock: 0,
    status: "Out of Stock",
    created: "02 jan 2025",
    action: <Icones />,
  },
  {
    id: "3",
    avatar: "src/assets/productLaptop.png",
    name: "B1 Laptop Bag",
    category: "Mouse",
    price: "$40.00",
    stock: 0,
    status: "in Draft",
    created: "01 jan 2025",
    action: <Icones />,
  },
  {
    id: "4",
    avatar: "src/assets/productTWSt2.png",
    name: "TWS Earphone T2",
    category: "Keyboard",
    price: "$140.00",
    stock: 120,
    status: "Published",
    created: "29 dez 2024",
    action: <Icones />,
  },
  {
    id: "5",
    avatar: "src/assets/productBerry.png",
    name: "Berry SmartWatch",
    category: "watch",
    price: "$140.00",
    stock: 114,
    status: "Published",
    created: "20 dez 2024",
    action: <Icones />,
  },
  {
    id: "6",
    avatar: "src/assets/productKeyPLus.png",
    name: "Keyboard Keyplus",
    category: "Mouse",
    price: "$140.00",
    stock: 120,
    status: "Published",
    created: "29 dez 2024",
    action: <Icones />,
  },
  {
    id: "7",
    avatar: "src/assets/productKeyPLus.png",
    name: "Keyboard Keyplus",
    category: "Mouse",
    price: "$140.00",
    stock: 120,
    status: "Published",
    created: "29 dez 2024",
    action: <Icones />,
  },
  {
    id: "8",
    avatar: "src/assets/productLogic.png",
    name: "Keyboard Keyplus",
    category: "Mouse",
    price: "$140.00",
    stock: 120,
    status: "Out of Stock",
    created: "29 dez 2024",
    action: <Icones />,
  },
  {
    id: "9",
    avatar: "src/assets/productMouse.png",
    name: "Keyboard Keyplus",
    category: "Mouse",
    price: "$140.00",
    stock: 120,
    status: "Published",
    created: "29 dez 2024",
    action: <Icones />,
  },
  {
    id: "10",
    avatar: "src/assets/productMouseLite.png",
    name: "Keyboard Keyplus",
    category: "Mouse",
    price: "$140.00",
    stock: 120,
    status: "in Draft",
    created: "29 dez 2024",
    action: <Icones />,
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
                <Box
                //   whiteSpace="nowrap"
                //   textOverflow="ellipsis"
                //   overflow="hidden"
                >
                  {ProductRow.name}
                </Box>
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
