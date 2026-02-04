import { Avatar, Box, Button, Typography } from "@mui/material";
import { SettingsIcone } from "../SettingsIcone";

interface ICardsProps {
  id: string;
  src: string;
  title: string;
  icone: React.ReactNode;
  text: string;
  button: string;
}

const Cards: ICardsProps[] = [
  {
    id: "1",
    src: "../../src/assets/Visa Inc. Logo.png",
    title: "Visa",
    icone: <SettingsIcone />,
    text: "Offers payment processing software for e-commerce websites and mobile applications.",
    button: "Choose Provider",
  },

  {
    id: "2",
    src: "../../src/assets/Frame 32.png",
    title: "American Express",
    icone: <SettingsIcone />,
    text: "Offers payment processing software for e-commerce websites and mobile applications.",
    button: "Choose Provider",
  },

  {
    id: "3",
    src: "../../src/assets/Frame 33.png",
    title: "Stripe",
    icone: <SettingsIcone />,
    text: "Offers payment processing software for e-commerce websites and mobile applications.",
    button: "Choose Provider",
  },

  {
    id: "4",
    src: "../../src/assets/frame 34.png",
    title: "PayPal",
    icone: <SettingsIcone />,
    text: "Offers payment processing software for e-commerce websites and mobile applications.",
    button: "Choose Provider",
  },
];

export const SettingsPaymentCards: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 3,
        justifyContent: { xs: "center", md: "flex-start" },
      }}
    >
      {Cards.map((Card) => (
        <Box
          key={Card.id}
          display="flex"
          flexDirection="column"
          gap={2}
          sx={{
            border: "1px solid #E0E0E0",
            borderRadius: 6,
            padding: 3,
            width: { xs: "100%", sm: 500 },
            maxWidth: 500,
            boxSizing: "border-box",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Avatar
                variant="square"
                src={Card.src}
                alt={Card.title}
                sx={{
                  width: 48,
                  height: 48,
                  "& .MuiAvatar-img": {
                    objectFit: "contain",
                  },
                }}
              />
              <h3 style={{ fontWeight: "lighter" }}>{Card.title}</h3>
            </Box>
            <Box
              sx={{
                "& svg": { color: "#000" },
                border: "1px solid #E0E0E0",
                borderRadius: 8,
                padding: 1,
              }}
            >
              {Card.icone}
            </Box>
          </Box>
          <Typography sx={{ fontSize: 14, marginBottom: 8 }}>
            {Card.text}
          </Typography>
          <Button sx={{ backgroundColor: "#f5f5f5", fontSize: 15 }}>
            {Card.button}
          </Button>
        </Box>
      ))}
    </Box>
  );
};
