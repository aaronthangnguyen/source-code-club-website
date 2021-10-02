import { Box, Container } from "@mui/material";
import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box>
        <Navbar />
      </Box>
      <Box>
        <Container>{children}</Container>
      </Box>
      <Box sx={{ mt: "auto" }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
