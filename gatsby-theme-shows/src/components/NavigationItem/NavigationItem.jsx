import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { Box } from "../Box";
import { Text } from "../Text";

export default function({ children, to }) {
  return (
    <NavigationItem as={Link} to={to} color="light-2" alignSelf="flex-end" p={2}>
      <Text fontFamily="heading" color="light-2" fontSize="1.5rem">
        {children}
      </Text>
    </NavigationItem>
  );
}

const NavigationItem = styled(Box)`
  text-decoration: none;
`;
