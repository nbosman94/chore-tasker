import { Box } from "@mui/material";
import ProfileAvatar from "../components/Profile/ProfileAvatar";
import TabSelector from "../components/TabSelector";
import Card from "../components/Card";

// import { FaceIcon } from "@mui/icons-material/Face";

const ProfilePage = () => {
  return (
    // Main page content
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: "#dde6d5",
      }}
    >
      {/* Top Section of profile page */}
      <Box
        sx={{
          width: 300,

          height: "auto",
          margin: "0 auto",
          position: "relative",
          padding: "20px",
        }}
      >
        <ProfileAvatar />
      </Box>

      {/* Bottom 2/3 section of Profile page */}
      <Box
        sx={{
          width: 300,
          height: "auto",
          margin: "0 auto",
          position: "relative",
          padding: "20px",
        }}
      >
        <TabSelector />
        <Box sx={{ marginTop: 2 }}>
          <Card title="Bedsheets" description="Every fortnight" date="13 Oct" />
          <Card title="Dishes" description="Every Evening" date="Ongoing" />
          <Card title={"Mow Lawn"} description={"Every week"} date={"17 Oct"} />
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;
