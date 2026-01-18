import { CheckBoxOutlineBlank } from "@mui/icons-material";
import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";

interface IProductColumnProps {
  id: string;
  label: string;
  hideOnMobile?: boolean;
}

const columns: IProductColumnProps[] = [
  { id: "PRODUCT", label: "PRODUCT" },
  { id: "CATEGORY", label: "CATEGORY" },
  { id: "PRICE", label: "PRICE" },
  { id: "STOCK", label: "STOCK", hideOnMobile: true },
  { id: "STATUS", label: "STATUS", hideOnMobile: true },
  { id: "CREATED", label: "CREATED", hideOnMobile: true },
  { id: "ACTION", label: "ACTION" },
];

export const ProductColumn: React.FC = () => {
  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{
        borderTopLeftRadius: 9,
        borderTopRightRadius: 9,
        background: "#F68605",
        marginTop: 6,
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <CheckBoxOutlineBlank fontSize="small" />
            </TableCell>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                sx={{
                  display: column.hideOnMobile
                    ? { xs: "none", md: "table-cell" }
                    : "table-cell",
                }}
              >
                <TableSortLabel sx={{ color: "#fff", fontWeight: 100 }}>
                  {column.label}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
};
