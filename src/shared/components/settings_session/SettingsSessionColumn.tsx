import { Box } from "@mui/material";

interface ISessionColumnsProps {
  id: string;
  label: string;
  hideOnMobile?: boolean;
}

const SessionColumns: ISessionColumnsProps[] = [
  {
    id: "1",
    label: "Browser Name",
  },
  {
    id: "2",
    label: "Location",
    hideOnMobile: true,
  },
  {
    id: "3",
    label: "Status",
  },
];

export const SettingsSessionColumn: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        paddingX: 6,
        paddingY: 1,
        border: "1px solid #ccc",
      }}
    >
      {SessionColumns.map((column) => (
        <Box
          key={column.id}
          sx={{
            display: column.hideOnMobile ? { xs: "none", md: "flex" } : "flex",
          }}
        >
          {column.label}
        </Box>
      ))}
    </Box>
  );
};
