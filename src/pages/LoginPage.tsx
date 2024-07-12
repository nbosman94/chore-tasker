import { Box, Button, Stack, TextField } from "@mui/material";

const LoginPage = () => {
  return (
    <>
      <Box
        sx={{
          // height: "100%",
          margin: "auto",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <Stack
          component={"form"}
          spacing={2}
          alignItems={"center"}
          autoComplete="off"
          sx={{
            width: "full",
          }}
        >
          <TextField
            label="email"
            id="outlined-size-small"
            defaultValue="email"
            size="small"
          />
          <TextField
            label="password"
            id="outlined-size-small"
            defaultValue="password"
            size="small"
          />
          <Button sx={{ width: "200px" }} variant="contained" color="primary">
            Log In
          </Button>
          <p style={{ fontSize: "10px" }}>Don't have an account? </p>{" "}
          <a
            style={{
              fontSize: "10px",
              cursor: "pointer",
              color: "black",
            }}
            href="/register"
          >
            {" "}
            Register
          </a>
        </Stack>
      </Box>
    </>
  );
};

export default LoginPage;
