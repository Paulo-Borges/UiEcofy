import { Box, Stack, Typography, Link } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AddIcon from "@mui/icons-material/Add";
import { ProductCards } from "../shared/components/product_card/ProductCard";

const Products = () => {
  return (
    <Box sx={{ margin: 7, flexGrow: 1 }}>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography sx={{ display: "flex", marginTop: 7 }}>
            <Box sx={{ fontWeight: 600 }}>Dashboard</Box>
            <ChevronRightIcon /> Product
          </Typography>
        </Box>
        <Stack sx={{}}>
          <Link
            sx={{
              display: "flex",
              marginTop: 7,
              background: "#F68605",
              color: "#fff",
              padding: 1,
              paddingX: 2,
              borderRadius: 3,
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            <AddIcon /> Add Product
          </Link>
        </Stack>
      </Stack>
      <ProductCards />
    </Box>
  );
};

export default Products;
