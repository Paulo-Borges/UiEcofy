import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

export const Details = () => {
  const { id } = useParams();

  return (
    <Box sx={{ margin: 7 }}>
      <h1> Details{id} </h1>
    </Box>
  );
};
