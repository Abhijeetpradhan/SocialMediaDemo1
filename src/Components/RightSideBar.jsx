import { Box } from "@mui/material";
import React from "react";

const RightSideBar = () => {
  return (
    <Box bgcolor="yellow" flex={2} padding={2} sx={{display:{xs:"none",sm:"block"}}}>
      RightSideBar
    </Box>
  );
};

export default RightSideBar;
