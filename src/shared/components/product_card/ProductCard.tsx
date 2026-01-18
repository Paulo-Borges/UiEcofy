import { Avatar, Box, Typography } from "@mui/material";

export interface IProductCards {
  id: string;
  src: string;
  title: string;
  preco: number;
}

export const Rows: IProductCards[] = [
  {
    id: "1",
    src: "../../src/assets/Icon Badge card.png",
    title: "Total Product",
    preco: 6.65,
  },
  {
    id: "2",
    src: "src/assets/Icon Badge card2.png",
    title: "Published",
    preco: 4.4,
  },
  {
    id: "3",
    src: "src/assets/Icon Badge3.png",
    title: "in Draft",
    preco: 920,
  },
  {
    id: "4",
    src: "/../../../../../src/assets/Icon Badge4.png",
    title: "Out of Stock",
    preco: 1.102,
  },
];

export const ProductCards: React.FC = () => {
  return (
    <Box display="flex" gap={3} flexWrap="wrap">
      {Rows.map((Row) => (
        <Box
          key={Row.id}
          bgcolor="#fff"
          paddingX={7}
          paddingY={4}
          borderRadius={4}
          marginTop={5}
          flexGrow={1}
        >
          <Box display="flex" gap={2}>
            <Avatar src={Row.src} alt={Row.title} />
            <Typography sx={{ fontSize: 20, color: "#7a7979" }}>
              {Row.title}
            </Typography>
          </Box>
          <Box sx={{ fontWeight: "bold", fontSize: 25 }}>
            {Row.preco.toFixed(3)}
          </Box>
        </Box>
      ))}
    </Box>
  );
};
