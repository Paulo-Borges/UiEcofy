import {
  Avatar,
  Box,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useParams } from "react-router-dom";

import { rows } from "../customer_table/CustomerTable"; // Importe os dados centralizados
import { DetailsHistory } from "./DetailsHistory";

const customerFields = [
  {
    src: "../../../src/assets/CustomerUser.png",
    label: "Account ID",
    id: "124",
  },
  {
    src: "../../../src/assets/CustomerIcon Badge.png",
    label: "Email",
    id: "27",
  },
  {
    src: "../../../src/assets/CustomerIconBadge.png",
    label: "Phone Number",
    id: "7850548877",
  },

  {
    src: "../../../src/assets/CustomerIcon1Badge.png",
    label: "Shipping Address",
    id: "U2186 Joice Street",
  },

  {
    src: "../../../src/assets/CustomerIcon2Badge.png",
    label: "Join Date",
    id: "29 Dec 2022",
  },
  {
    src: "../../../src/assets/CustomerIcon3Badge.png",
    label: "Last Transaction",
    id: "121 minute",
  },
];

export const DetailsCustomer = () => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));

  const { id } = useParams(); // Pega o ID da URL

  // Procura o cliente específico pelo ID
  const customer = rows.find((item) => String(item.id) === String(id));

  if (!customer) {
    return (
      <Box sx={{ p: 5, textAlign: "center" }}>
        <Typography variant="h6">Cliente não encontrado.</Typography>
      </Box>
    );
  }

  return (
    <Stack
      direction={{ xs: "column", lg: "row" }}
      gap={{ xs: 3, md: 6 }}
      width={smDown ? "60%" : mdDown ? "80%" : "100%"}
      paddingLeft={smDown ? 2 : 0}
    >
      <Paper
        sx={{
          p: 3,
          borderRadius: 4,
          marginTop: 3,
          width: { xs: "100%", lg: "350px" },
          flexShrink: 0,
        }}
        // width={smDown ? "60%" : mdDown ? "80%" : "100%"}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row", lg: "column" },
            justifyContent: "center",
            alignItems: "center",
            borderBottom: 1,
            borderColor: "divider",
            marginBottom: 4,
            gap: 6,
          }}
        >
          <Avatar
            src={customer.imagem}
            sx={{ width: 100, height: 100 }}
            variant="rounded"
          />
          <Box sx={{}}>
            <Typography
              variant="body1"
              fontWeight="bold"
              sx={{ paddingBottom: 1 }}
            >
              {customer.customerName}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                background: "#9ce09c",
                paddingX: 2,
                paddingY: 1,
                borderRadius: 4,
              }}
            >
              {customer.status}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", marginBottom: 3 }}
          >
            Customer Details
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {customerFields.map((field) => (
              <Box key={field.label}>
                <Avatar
                  src={field.src}
                  variant="rounded"
                  sx={{
                    width: 20,
                    height: 20,
                    bgcolor: "#000",
                    borderRadius: 28,
                  }}
                />
                <Box>
                  <Typography variant="caption">{field.label}</Typography>
                  <Typography variant="body2">{field.id}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Paper>
      <Paper sx={{ p: { xs: 1, sm: 3 }, flexGrow: 1, overflow: "hidden" }}>
        <DetailsHistory />
      </Paper>
    </Stack>
  );
};
