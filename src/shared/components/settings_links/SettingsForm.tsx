import {
  Avatar,
  Box,
  Divider,
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputLabel,
  Paper,
  Typography,
} from "@mui/material";

export const SettingsForm = () => {
  return (
    <Box
      component={Paper}
      sx={{ flexGrow: 1, marginTop: 3, borderRadius: 5, padding: 3 }}
    >
      <Box paddingBottom={3}>
        <Typography sx={{ fontWeight: 500 }}>Personal informations</Typography>
      </Box>
      <Divider />
      <Box display="flex" sx={{ paddingY: 5, gap: 5 }}>
        <Box>
          <Avatar
            src="../src/assets/SettingsAvatar.png"
            sx={{ width: 88, height: 88 }}
          ></Avatar>
        </Box>
        <Box>
          <Box>
            <Typography>We only support .JPG, .JPEG, or .PNG file.</Typography>
          </Box>
          <Box display="flex">
            <IconButton sx={{ background: "#F68605" }}>
              Upload your photo
            </IconButton>
            <IconButton>Delete Image</IconButton>
          </Box>
        </Box>
      </Box>
      <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">
          We'll never share your email.
        </FormHelperText>
      </FormControl>
    </Box>
  );
};
