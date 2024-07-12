import { Box } from "@mui/material";
import ProfileMenu from "../components/Profile/ProfileMenu";

const TopNavBarLayout = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: 50,
          backgroundColor: "#e7e6f7",
          borderRadius: 2,
          boxShadow: 2,
        }}
      >
        <Box sx={{ position: "absolute", right: 5 }}>
          <ProfileMenu />
        </Box>
      </Box>
    </>
  );
};

export default TopNavBarLayout;
