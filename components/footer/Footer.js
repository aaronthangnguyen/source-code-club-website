import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Link from "../../src/Link";

const Footer = () => {
  return (
    <Box marginTop="auto" padding={2}>
      <Typography variant="body2" color="text.secondary" align="center">
        {"Built with React.js, Next.js, and MUI by "}
        <Link color="inherit" href="https://www.aaronnguyen.dev/">
          Aaron Nguyen
        </Link>
        {" in "}
        {new Date().getFullYear()}.
      </Typography>
    </Box>
  );
};

export default Footer;
