import React from "react";
import { string, object, any } from "prop-types";
import Image from "gatsby-image";

import { Card } from "./../Card";
import { Box } from "./../Box";
import { Text } from "./../Text";

export default function ProfileCard({ name, title, description, imageFluid, children, ...rest }) {
  return (
    <Card display="flex" flexWrap="wrap" justifyContent="space-around" bg="dark" {...rest}>
      <Box maxWidth={300} flexBasis={["100%", "30%"]}>
        <Image fluid={imageFluid} />
      </Box>
      <Box display="flex" flexBasis={["100%", "67%"]} flexDirection="column">
        <Text fontFamily="heading" fontSize="2rem" color="light" fontWeight="bold" mt={0} mb={3}>
          {name}
        </Text>
        <Text fontFamily="heading" fontSize="1.75rem" color="light" fontWeight="bold" mt={0} mb={3}>
          {title}
        </Text>
        <Text fontFamily="base" color="light" fontSize="1.25rem">
          {description}
        </Text>
        {children}
      </Box>
    </Card>
  );
}

ProfileCard.propTypes = {
  children: any,
  description: string,
  imageFluid: object,
  name: string,
  title: string,
};
