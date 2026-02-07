import type React from "react";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { Avatar, Box } from "@mui/material";

interface ISettingsSessionRows {
  id: number;
  image: string;
  browser: string;
  location: string;
  status: string;
  icone: React.ReactNode;
}

const SettingsRows: ISettingsSessionRows[] = [
  {
    id: 1,
    image: "../src/assets/google.png",
    browser: "Google Chrome",
    location: "Dhaka, Bangladesh",
    status: "226.0.1.1",
    icone: <RadioButtonUncheckedIcon />,
  },
  {
    id: 2,
    image: "../src/assets/opera.png",
    browser: "Opera Mini",
    location: "Gazipur, Dhaka, Bangladesh",
    status: "224.0.1.1",
    icone: <RadioButtonUncheckedIcon />,
  },
];

export const SettingsSessionRows: React.FC = () => {
  return (
    <Box>
      {SettingsRows.map((SettingsRow) => (
        <Box
          key={SettingsRow.id}
          display="flex"
          justifyContent="space-between"
          paddingX={4}
          border="1px solid #e0e0e0"
          alignItems="center"
        >
          <Box display="flex" alignItems="center">
            <Avatar src={SettingsRow.image} />
            <Box>{SettingsRow.browser}</Box>
          </Box>
          <Box display={{ xs: "none", sm: "block" }}>
            {SettingsRow.location}
          </Box>

          <Box display="flex" alignItems="center" gap={2}>
            <Box>{SettingsRow.status}</Box>
            <Box>{SettingsRow.icone}</Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
