import { Box, Link, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { DetailsCustomer } from "../shared/components/details_customer/DetailsCustomer";

export const Details = () => {
  const { id } = useParams();

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
            Edit Profile
          </Link>
        </Stack>
      </Stack>
      <DetailsCustomer />
    </Stack>
  );
};
