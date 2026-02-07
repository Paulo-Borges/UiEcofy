import { Avatar, Box, Typography } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useState } from "react";

interface IThemesProps {
  id: number;
  title: string;
  image: string;
  icone: React.ReactNode;
}

const Themes: IThemesProps[] = [
  {
    id: 1,
    title: "Light mode",
    image: "../src/assets/Frame 1677.png",
    icone: <CheckBoxIcon />,
  },
  {
    id: 2,
    title: "Dark mode",
    image: "../src/assets/Frame 1678.png",
    icone: <CheckBoxIcon />,
  },
];

export const SettingsAppearanceTheme: React.FC = () => {
  const [selectedThemeId, setSelectedThemeId] = useState<number>(1);

  return (
    <Box display={{ xs: "block", sm: "flex" }} gap={{ xs: 0, sm: 5 }}>
      {Themes.map((Theme) => {
        const isSelected = selectedThemeId === Theme.id;

        return (
          <Box
            key={Theme.id}
            sx={{
              border: isSelected
                ? "1px solid #f68605"
                : "1px solid transparent",
              width: 250,
              height: 240,
              borderRadius: 4,
              marginBottom: { xs: 3, sm: 0 },
            }}
            onClick={() => setSelectedThemeId(Theme.id)}
          >
            <Avatar
              variant="square"
              src={Theme.image}
              sx={{ width: "100%", height: "80%", borderRadius: 4 }}
            />
            <Box
              sx={{ display: "flex", gap: 2, paddingTop: 2, paddingLeft: 2 }}
            >
              <Box
                sx={{
                  "& svg": { color: "#f68605" },
                  opacity: isSelected ? 1 : 0,
                }}
                color={
                  isSelected ? "1px solid #f68605" : "2px solid transparent"
                }
              >
                <CheckBoxIcon />
              </Box>
              <Typography>{Theme.title}</Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};
