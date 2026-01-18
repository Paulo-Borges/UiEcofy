import { Box, Icon, Typography, useMediaQuery, useTheme } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const ProductInput = () => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Box
        display="flex"
        gap={1}
        marginTop={7}
        flexGrow={smDown ? 1 : mdDown ? 1 : 0}
        sx={{
          background: "#fff",
          padding: 1,
          borderRadius: 4,
          paddingX: 12,
        }}
      >
        <Icon fontSize="small">search</Icon>
        <Typography color="#7c7a7a" fontSize={14} sx={{}}>
          Search...
        </Typography>
      </Box>
      <Box
        display={smDown ? "none" : mdDown ? "none" : "flex"}
        sx={{ gap: 2 }}
        marginTop={7}
      >
        <Box
          display="flex"
          alignItems="center"
          sx={{ background: "#fff", padding: 1, borderRadius: 4 }}
        >
          <Typography color="#7c7a7a" fontSize={14}>
            All Category
          </Typography>
          <ExpandMoreIcon />
        </Box>
        <Box
          display="flex"
          alignItems="center"
          sx={{ background: "#fff", padding: 1, borderRadius: 4 }}
        >
          <Typography color="#7c7a7a" fontSize={14}>
            All Prices
          </Typography>
          <ExpandMoreIcon />
        </Box>
        <Box
          display="flex"
          alignItems="center"
          sx={{ background: "#fff", padding: 1, borderRadius: 4 }}
        >
          <Typography color="#7c7a7a" fontSize={14}>
            Newest
          </Typography>
          <ExpandMoreIcon />
        </Box>
      </Box>
    </Box>
  );
};
