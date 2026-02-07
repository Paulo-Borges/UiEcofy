import { Avatar, Box, Typography } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

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

export const SettingsAppearanceTheme = () => {
  return (
    <Box display={{ xs: "block", sm: "flex" }} gap={{ xs: 0, sm: 5 }}>
      {Themes.map((Theme) => (
        <Box
          key={Theme.id}
          sx={{
            border: "1px solid #e0e0e0",
            width: 250,
            height: 240,
            borderRadius: 4,
            marginBottom: { xs: 3, sm: 0 },
          }}
        >
          <Avatar
            variant="square"
            src={Theme.image}
            sx={{ width: "100%", height: "80%" }}
          />
          <Box sx={{ display: "flex", gap: 2, paddingTop: 2, paddingLeft: 2 }}>
            <Box sx={{ "& svg": { color: "#f68605" } }}>
              <CheckBoxIcon />
            </Box>
            <Typography>{Theme.title}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
