import { Box, Chip, Stack } from "@mui/material";
import { useState } from "react";

export default function TabSelector() {
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleClick = () => {};

  return (
    <Box sx={{ width: "90%", typography: "body1" }}>
      <Box sx={{}}>
        <Stack direction="row" spacing={2}>
          <Chip label="To Do" onClick={handleClick} color="primary" />
          <Chip label="Completed" color="primary" onClick={handleClick} />
        </Stack>
      </Box>
    </Box>
  );
}
