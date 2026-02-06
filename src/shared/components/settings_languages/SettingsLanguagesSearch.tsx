import { Box, TextField, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useState } from "react";

interface ILanguagesProps {
  id: string;
  title: string;
  icone: React.ReactNode;
}

const Languages: ILanguagesProps[] = [
  {
    id: "1",
    title: "English (USA)",
    icone: <CheckCircleIcon />,
  },
  {
    id: "2",
    title: "English (BBR)",
    icone: <CheckCircleIcon />,
  },
  {
    id: "3",
    title: "Singapore (SG)",
    icone: <CheckCircleIcon />,
  },
  {
    id: "4",
    title: "France (FR)",
    icone: <CheckCircleIcon />,
  },
  {
    id: "5",
    title: "India (IN)",
    icone: <CheckCircleIcon />,
  },
  {
    id: "6",
    title: "Spain (ES)",
    icone: <CheckCircleIcon />,
  },
  {
    id: "7",
    title: "Italy (IT)",
    icone: <CheckCircleIcon />,
  },
  {
    id: "8",
    title: "Greece (GR)",
    icone: <CheckCircleIcon />,
  },
  {
    id: "9",
    title: "Netherlands (NL)",
    icone: <CheckCircleIcon />,
  },
  {
    id: "10",
    title: "Brasil (BR)",
    icone: <CheckCircleIcon />,
  },
];

export const SettingsLanguagesSearch: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>("1");

  return (
    <Box sx={{ width: "100%" }}>
      <TextField placeholder="Search languages" sx={{ width: "100%" }} />
      <Box sx={{ marginTop: 3 }}>
        {Languages.map((Language) => {
          const isSelected = selectedId === Language.id;

          return (
            <Box
              key={Language.id}
              onClick={() => setSelectedId(Language.id)}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: 2,
                marginBottom: 2,
                cursor: "pointer",
                border: "1px solid ",
                borderColor: isSelected ? "#f68605" : "transparent",
              }}
            >
              <Typography>{Language.title}</Typography>
              <Box
                sx={{
                  opacity: isSelected ? 1 : 0,
                  "& svg": { color: "#f68605" },
                }}
              >
                {Language.icone}
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
