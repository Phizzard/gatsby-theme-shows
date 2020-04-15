import React from "react";
import { ThemeProvider } from "styled-components";
import "typeface-montserrat";
import "typeface-permanent-marker";

import theme from "./../../theme";
import { Navigation } from "./../Navigation";
import { Box } from "./../Box";
import { Footer } from "./../Footer";

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" flexDirection="column" bg="dark-2">
        <Navigation />
        <Box alignSelf="center" width={1} maxWidth={1380} px={2} mt={4}>
          {children}
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
