import { IconButton, Stack } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export const SettingsIcone = () => {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton
        size="small"
        color="error"
        onClick={() => console.log("Delete")}
      >
        <ArrowOutwardIcon fontSize="small" />
      </IconButton>
    </Stack>
  );
};
