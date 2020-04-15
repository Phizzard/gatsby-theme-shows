import React from "react";

import { Box } from "../Box";
import { Text } from "../Text";
import { NavigationItem } from "../NavigationItem";

export default function Navigation() {
  return (
    <Box display="flex" bg="dark" color="light-2" width={1} justifyContent="center">
      <Box display="flex" justifyContent="space-between" width={1} maxWidth={1380}>
        <Box alignSelf="flex-end" p={2}>
          <Text fontFamily="heading" fontSize="3rem">
            Shows Theme
          </Text>
        </Box>
        <Box display="flex" direction="row">
          <NavigationItem to="/landing">Shows</NavigationItem>
          <NavigationItem to="/about">About</NavigationItem>
          <NavigationItem to="/search">Search</NavigationItem>
        </Box>
      </Box>
    </Box>
  );
}
