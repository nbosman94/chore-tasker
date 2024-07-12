import { Box } from "@mui/material";
import family from "../assets/familychores.png";
import LoginPage from "./LoginPage";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router";

const LandingPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const handleOnLogin = () => {
    setIsLogin(true);
  };

  const handleOnRegister = () => {
    navigate("/register");
  };
  return (
    <>
      <Box
        sx={{
          width: "350px",
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
          padding: "2px",
          height: "350px",
        }}
      >
        <img className="w-8" src={family} style={{ width: "350px" }} />
      </Box>

      {isLogin ? (
        <LoginPage />
      ) : (
        <Box
          sx={{
            width: "350px",
            alignItems: "center",
            alignContent: "center",
            margin: "auto",
            height: "300px",
            textAlign: "center",
          }}
        >
          <h1>Chore Tasker</h1>
          <p>Effortlessly divide household chores among family members.</p>
          <Box>
            <button className="login-button" onClick={handleOnLogin}>
              Login
            </button>
            <button className="register-button" onClick={handleOnRegister}>
              Register
            </button>
          </Box>
        </Box>
      )}
    </>
  );
};

export default LandingPage;
