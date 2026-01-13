import {
  Box,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// import { useParams } from "react-router-dom";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { DetailsCustomer } from "../shared/components/details_customer/DetailsCustomer";

export const Details = () => {
  // const { id } = useParams();
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack sx={{ flexGrow: 1 }} margin={smDown ? 0 : 7}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        sx={{
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          marginTop: { xs: 2, md: 7 },
        }}
      >
        <Box paddingLeft={smDown ? 7 : 0} paddingTop={smDown ? 7 : 0}>
          <Typography
            sx={{ display: "flex", marginTop: 7, alignItems: "center" }}
          >
            <Box sx={{ fontWeight: 600 }}>Dashboard</Box>
            <ChevronRightIcon /> Customers
          </Typography>
        </Box>
        <Stack sx={{}}>
          <Link
            sx={{
              background: "#111111",
              color: "#fff",
              padding: 1,
              paddingX: 2,
              borderRadius: 3,
              textDecoration: "none",
              cursor: "pointer",
              width: { xs: "100%", sm: "auto" },
              justifyContent: "center",
            }}
            display={smDown ? "none" : "flex"}
          >
            Edit Profile
          </Link>
        </Stack>
      </Stack>
      <DetailsCustomer />
    </Stack>
  );
};
