import { Avatar, Box, Paper, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import { rows } from "../customer_table/CustomerTable"; // Importe os dados centralizados
import { DetailsHistory } from "./DetailsHistory";

export const DetailsCustomer = () => {
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
    <Stack direction="row" gap={6}>
      <Paper
        sx={{
          p: 3,
          alignItems: "center",
          gap: 3,
          borderRadius: 4,
          marginTop: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
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
            sx={{ width: 100, height: 100, marginBottom: 3 }}
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
          <Box sx={{ display: "flex", gap: 1 }}>
            <Avatar
              src="../../../src/assets/CustomerUser.png"
              variant="rounded"
              sx={{ width: 20, height: 20, bgcolor: "#000", borderRadius: 28 }}
            />
            <Box>
              <Typography variant="caption">Account ID</Typography>
              <Typography variant="body2">{customer.orders}</Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", gap: 1 }}>
            <Avatar
              src="../../../src/assets/CustomerIcon Badge.png"
              variant="rounded"
              sx={{ width: 20, height: 20, bgcolor: "#000", borderRadius: 28 }}
            />
            <Box>
              <Typography variant="caption">Email</Typography>
              <Typography variant="body2">{customer.customerName}</Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", gap: 1 }}>
            <Avatar
              src="../../../src/assets/CustomerIconBadge.png"
              variant="rounded"
              sx={{ width: 20, height: 20, bgcolor: "#000", borderRadius: 28 }}
            />
            <Box>
              <Typography variant="caption">Phone Number</Typography>
              <Typography variant="body2">{customer.phone}</Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", gap: 1 }}>
            <Avatar
              src="../../../src/assets/CustomerIcon1Badge.png"
              variant="rounded"
              sx={{ width: 20, height: 20, bgcolor: "#000", borderRadius: 28 }}
            />
            <Box>
              <Typography variant="caption">Shipping Address</Typography>
              <Typography variant="body2">U2186 Joice Street</Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", gap: 1 }}>
            <Avatar
              src="../../../src/assets/CustomerIcon2Badge.png"
              variant="rounded"
              sx={{ width: 20, height: 20, bgcolor: "#000", borderRadius: 28 }}
            />
            <Box>
              <Typography variant="caption">Join Date</Typography>
              <Typography variant="body2">{customer.added}</Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", gap: 1 }}>
            <Avatar
              src="../../../src/assets/CustomerIcon3Badge.png"
              variant="rounded"
              sx={{ width: 20, height: 20, bgcolor: "#000", borderRadius: 28 }}
            />
            <Box>
              <Typography variant="caption">Last Transaction</Typography>
              <Typography variant="body2">{customer.balance} minute</Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
      <Paper sx={{ p: 3, alignItems: "center", gap: 3 }}>
        <DetailsHistory />
      </Paper>
    </Stack>
  );
};
