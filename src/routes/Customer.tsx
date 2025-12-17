import { Box, Link, Stack, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AddIcon from "@mui/icons-material/Add";
import CustomerTable from "../shared/components/customer_table/CustomerTable";

const Customer = () => {
  return (
    <Stack sx={{ margin: 7, flexGrow: 1 }}>
      <Stack
        direction="row"
        spacing={2}
        sx={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <Box>
          <Typography sx={{ display: "flex", marginTop: 7 }}>
            <Box sx={{ fontWeight: 600 }}>Dashboard</Box>
            <ChevronRightIcon /> Customers
          </Typography>
        </Box>
        <Stack sx={{}}>
          <Link
            sx={{
              display: "flex",
              marginTop: 7,
              background: "#111111",
              color: "#fff",
              padding: 1,
              paddingX: 2,
              borderRadius: 3,
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            <AddIcon /> Add orders
          </Link>
        </Stack>
      </Stack>
      <CustomerTable />
    </Stack>
  );
};

export default Customer;
