import { Avatar, Box, Stack, Typography } from "@mui/material";

export const DetailsCustomer = () => {
  return (
    <Stack direction="column" gap={5}>
      <Box sx={{ bgcolor: "#fff" }}>
        <Box sx={{ display: "flex" }}>
          <Avatar
            src="../../../src/assets/Photo.png"
            variant="rounded"
            sx={{ width: 80, height: 80, bgcolor: "#f5f5f5" }}
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography>John Smith</Typography>
            <Typography>Active</Typography>
          </Box>
        </Box>
        <Stack>
          <Typography>Customer Details</Typography>
        </Stack>
        <Box sx={{ display: "flex" }}>
          <Avatar
            src="../../../src/assets/CustomerUser.png"
            variant="rounded"
            sx={{ width: 20, height: 20, bgcolor: "#000", borderRadius: 28 }}
          />
          <Box>
            <Typography>Account ID</Typography>
            <Typography>2930182</Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex" }}>
          <Avatar
            src="../../../src/assets/CustomerIcon Badge.png"
            variant="rounded"
            sx={{ width: 20, height: 20, bgcolor: "#000", borderRadius: 28 }}
          />
          <Box>
            <Typography>Email</Typography>
            <Typography>lukeholland@gmail.com</Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex" }}>
          <Avatar
            src="../../../src/assets/CustomerIconBadge.png"
            variant="rounded"
            sx={{ width: 20, height: 20, bgcolor: "#000", borderRadius: 28 }}
          />
          <Box>
            <Typography>Phone Number</Typography>
            <Typography>+6141 234 567</Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex" }}>
          <Avatar
            src="../../../src/assets/CustomerIcon1Badge.png"
            variant="rounded"
            sx={{ width: 20, height: 20, bgcolor: "#000", borderRadius: 28 }}
          />
          <Box>
            <Typography>Shipping Address</Typography>
            <Typography>U2186 Joice Street</Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex" }}>
          <Avatar
            src="../../../src/assets/CustomerIcon2Badge.png"
            variant="rounded"
            sx={{ width: 20, height: 20, bgcolor: "#000", borderRadius: 28 }}
          />
          <Box>
            <Typography>Join Date</Typography>
            <Typography>14 January 2022</Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex" }}>
          <Avatar
            src="../../../src/assets/CustomerIcon3Badge.png"
            variant="rounded"
            sx={{ width: 20, height: 20, bgcolor: "#000", borderRadius: 28 }}
          />
          <Box>
            <Typography>Last Transaction</Typography>
            <Typography>1 Minute ago</Typography>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};
