import { Button } from "@mui/material";

interface IButtonLoginProps {
  type: "button" | "submit" | "reset" | undefined;
  onClick: () => void;
  children: React.ReactNode;
}

export const ButtonLogin: React.FC<IButtonLoginProps> = ({
  type,
  onClick,
  children,
}) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      sx={{
        border: "1px solid #dedcdc",
        paddingy: 2,
        paddingX: 5,
        fontSize: 20,
        gap: 2,
      }}
    >
      {children}
    </Button>
  );
};
