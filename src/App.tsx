import "./App.css";
import HouseholdPage from "./pages/HouseholdPage";
import ProfilePage from "./pages/ProfilePage";
import TaskPage from "./pages/TaskPage";
import BottomNavBar from "./layout/BottomNavBar";

import { Route, Routes } from "react-router";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#a3b899",
      },
      secondary: {
        main: "#dde6d5",
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <BottomNavBar>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/tasks" element={<TaskPage />} />
            <Route path="/household" element={<HouseholdPage />} />
          </Routes>
        </BottomNavBar>
      </ThemeProvider>
    </>
  );
}

export default App;
