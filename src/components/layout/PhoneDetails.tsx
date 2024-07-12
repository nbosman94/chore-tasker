import WifiIcon from "@mui/icons-material/Wifi";
import SignalCellularAlt2BarIcon from "@mui/icons-material/SignalCellularAlt2Bar";
import { Box } from "@mui/material";

const PhoneDetails = () => {
  return (
    <>
      <Box sx={{}}>
        <p>12:45</p>
        <SignalCellularAlt2BarIcon fontSize="small" />
        <WifiIcon fontSize="small" />
      </Box>
    </>
  );
};

export default PhoneDetails;
