import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import AssignmentIcon from "@mui/icons-material/Assignment";
import GroupsIcon from "@mui/icons-material/Groups";
import { ReactNode } from "react";
import TopNavBarLayout from "./TopNavBarLayout";

type NavBarLayoutProps = {
  children: ReactNode;
};

const NavBarLayout: React.FC<NavBarLayoutProps> = ({ children }) => {
  const menuItems = ["Home", "Profile", "Tasks", "Households"];

  const icons = [
    <HomeIcon />,
    <PersonIcon />,
    <AssignmentIcon />,
    <GroupsIcon />,
  ];

  return (
    <>
      <Box
        sx={{
          width: "393px",
          backgroundColor: "#9984D4",
          borderRadius: 3,
          boxShadow: 2,
          marginTop: 2,
        }}
      >
        <List>
          {menuItems.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{icons[index]}</ListItemIcon>
                <ListItemText primary={text} sx={{ color: "white" }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Box>

      <Box>{children}</Box>
    </>
  );
};

export default NavBarLayout;
