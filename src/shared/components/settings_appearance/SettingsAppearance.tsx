import { Avatar, Box, Paper, Typography } from "@mui/material";

export const SettingsAppearance = () => {
  return (
    <Box
      component={Paper}
      sx={{ marginTop: 3, borderRadius: 5, padding: 3 }}
      id="SettingsAppearance"
    >
      <Box paddingBottom={3}>
        <Typography sx={{ fontWeight: 500 }}>Appearance Settings</Typography>
      </Box>
      <Box display="flex" sx={{ paddingY: 5, gap: 5 }}>
        <Box>
          <Avatar
            src="../src/assets/SettingsAvatar.png"
            sx={{ width: 88, height: 88 }}
          ></Avatar>
        </Box>
        <Box>
          <Box>
            <Typography marginBottom={3} fontSize={12}>
              We only support .JPG, .JPEG, or .PNG file.
            </Typography>
          </Box>
          <Box display="flex" gap={2}>
            <Box
              component="button"
              sx={{
                background: "#F68605",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#e6b272",
                  color: "#888",
                },
                paddingX: 2,
                paddingY: 1,
                borderRadius: 2,
                border: "none",
                cursor: "pointer",
              }}
            >
              Upload your photo
            </Box>
            <Box
              component="button"
              sx={{
                background: "#fff",
                "&:hover": {
                  color: "#888",
                },
                fontWeight: "bold",
                border: "none",
                cursor: "pointer",
              }}
            >
              Delete Image
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
