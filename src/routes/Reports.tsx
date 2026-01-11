import { Box } from "@mui/material";
import { HomeBase } from "../shared/components/home_base/HomeBase";
import { ReportsStatic } from "../shared/components/reports_statistic/ReportsStatisc";

const Reports = () => {
  return (
    <Box sx={{ margin: 7 }}>
      <HomeBase titulo="Reports" />

      <ReportsStatic />
    </Box>
  );
};

export default Reports;
