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
          <ListItemButton
            onClick={() => setActiveTab("taxes")}
            selected={activeTab === "taxes"}
          >
            <ListItemText primary="Taxes & Duties" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            onClick={() => setActiveTab("languages")}
            selected={activeTab === "languages"}
          >
            <ListItemText primary="Languages" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            onClick={() => setActiveTab("appearance")}
            selected={activeTab === "appearance"}
          >
            <ListItemText primary="Appearance" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            onClick={() => setActiveTab("session")}
            selected={activeTab === "session"}
          >
            <ListItemText primary="Active Session" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </nav>
  );
};
