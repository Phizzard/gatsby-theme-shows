import React from "react";

import { Box } from "../Box";
import { Text } from "../Text";

export default function Footer() {
  return (
    <Box display="flex" alignSelf="center" as="footer" bg="dark" width={1} justifyContent="center">
      <Box display="flex" flexDirection="column" maxWidth={1380} width={1} justifyContent="center" alignItems="center">
        <Text as="h5" fontFamily="heading" fontWeight="bold" fontSize="2.5rem" color="light" textAlign="center" mt={4} mb={0}>
          We'll Listen To You Too!
        </Text>
        <Text as="p" fontSize="1.5rem" color="light" my={4} textAlign="center">
          We would love to hear from our audience out there! Send in a question, share a story, drop some feedback, or maybe a shoutout at the end of our Friday Night Deploys podcast show. Send in an email or reach us on twitter by mentions or DMs to get our
          attention!
        </Text>
        <Text fontSize=".7rem" textAlign="center" color="light-2" py={2}>
          ©{new Date().getFullYear()} Gatsby Theme Shows
        </Text>
      </Box>
    </Box>
  );
}
