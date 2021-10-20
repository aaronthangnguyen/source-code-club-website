import { AppBar, Box, Container, Grid } from "@mui/material";
import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <Box height="100vh" display="flex" flexDirection="column" gap={4}>
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </Box>
  );
};

export default Layout;
