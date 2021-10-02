import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Link from "../../src/Link";

const Footer = () => {
  return (
    <Box
      sx={{
        mt: 4,
        mb: 2,
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        {"Built with React.js, Next.js, and MUI by "}
        <Link color="inherit" href="https://www.aaronnguyen.dev/">
          Aaron T. Nguyen
        </Link>
        {" in "}
        {new Date().getFullYear()}.
      </Typography>
    </Box>
  );
};

export default Footer;
