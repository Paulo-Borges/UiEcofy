import {
  Avatar,
  Box,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";

const Login = () => {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        justifyContent: "center",
        alignItems: "center",
        width: 300,
        height: 400,
        background: "#f2eeee",
      }}
    >
      <Typography sx={{ fontWeight: "bold", fontSize: 30, marginBottom: 2 }}>
        LOGIN
      </Typography>
      <FormControl sx={{ marginBottom: 2 }}>
        <InputLabel htmlFor="component-outlined">UserName</InputLabel>
        <OutlinedInput
          id="component-outlined"
          defaultValue=""
          label="UserName"
        />
      </FormControl>

      <FormControl sx={{ marginBottom: 4 }}>
        <InputLabel htmlFor="component-outlined">Password</InputLabel>
        <OutlinedInput
          id="component-outlined"
          defaultValue=""
          label="Password"
        />
      </FormControl>

      <Stack
        direction="row"
        alignItems="center"
        border="2px solid #ccc"
        gap={2}
        paddingX={4}
      >
        <Button variant="text" sx={{ fontSize: 20 }}>
          Entrar
        </Button>
        <Avatar
          alt="logo do Ecofy"
          src="./src/assets/Group.svg"
          variant="square"
          sx={{ width: 30, height: 30 }}
        ></Avatar>
      </Stack>
    </Box>
  );
};

export default Login;
