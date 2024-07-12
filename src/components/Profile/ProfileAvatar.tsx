import { Avatar, Box, Paper, Stack, styled } from "@mui/material";
import AvatarPic from "../../assets/avatar1.png";

const ProfileAvatar = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.text.secondary,
    flexGrow: 1,
  }));
  return (
    <>
      <Box>
        <Stack direction="row" useFlexGap flexWrap="wrap">
          <Item>
            {" "}
            <Avatar src={AvatarPic} />
          </Item>
        </Stack>
      </Box>
    </>
  );
};

export default ProfileAvatar;
