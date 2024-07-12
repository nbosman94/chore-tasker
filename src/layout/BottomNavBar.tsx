import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import { ReactNode, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import AssignmentIcon from "@mui/icons-material/Assignment";
import GroupsIcon from "@mui/icons-material/Groups";
import { Link } from "react-router-dom";

type NavBarLayoutProps = {
  children: ReactNode;
};
const BottomNavBar: React.FC<NavBarLayoutProps> = ({ children }) => {
  const [value, setValue] = useState(0);

  return (
    <>
      {/* iphone details like battery etc */}
      <Box
        sx={{
          backgroundColor: "#fceee9",
          width: "100%",
          height: 20,
          margin: 0,
        }}
      >
        {/* <PhoneDetails /> */}
      </Box>

      {/* Main content */}
      <Box
        sx={{
          height: 670,
          width: 400,
          backgroundColor: "#dde6d5",
          borderRadius: 2,
        }}
      >
        {children}
      </Box>

      {/* Bottom Navigation */}
      <Box
        sx={{
          width: 400,
          bottom: 0,
          right: 0,
          left: 0,
          //   zIndex: 5,
          //   position: "fixed",
          borderRadius: 2,
        }}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(_event, newValue) => {
            setValue(newValue);
          }}
        >
          <Link to="/profile">
            <BottomNavigationAction label="Tasks" icon={<PersonIcon />} />
          </Link>

          <Link to="/tasks">
            <BottomNavigationAction label="Tasks" icon={<AssignmentIcon />} />
          </Link>

          {/* <Link href="/#">
            <BottomNavigationAction label="Add" icon={<AddCircleIcon />} />
          </Link> */}

          <Link to="/household">
            <BottomNavigationAction label="Tasks" icon={<GroupsIcon />} />
          </Link>
        </BottomNavigation>
      </Box>
    </>
  );
};

export default BottomNavBar;
