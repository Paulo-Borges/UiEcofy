import { IconButton, Stack } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export const Icones = () => {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton size="small" onClick={() => console.log("Edit")}>
        <CreateIcon fontSize="small" />
      </IconButton>
      <IconButton
        size="small"
        color="error"
        onClick={() => console.log("Delete")}
      >
        <DeleteForeverIcon fontSize="small" />
      </IconButton>
    </Stack>
  );
};
