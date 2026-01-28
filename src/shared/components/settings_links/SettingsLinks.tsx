import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

export const SettingsLinks = ({ setActiveTab, activeTab }) => {
  return (
    <nav>
      <List
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          "& .MuiListItemText-primary": { fontSize: 12 },
          whiteSpace: "nowrap", // Impede que o texto quebre linha
        }}
      >
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => setActiveTab("general")}
            selected={activeTab === "general"} // Opcional: destaca o botão ativo
          >
            <ListItemText primary="General" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            onClick={() => setActiveTab("payment")}
            selected={activeTab === "payment"}
          >
            <ListItemText primary="Payment & Billing" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="#">
            <ListItemText primary="Taxes & Duties" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#">
            <ListItemText primary="Languages" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#">
            <ListItemText primary="Appearance" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#">
            <ListItemText primary="Active Session" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </nav>
  );
};
