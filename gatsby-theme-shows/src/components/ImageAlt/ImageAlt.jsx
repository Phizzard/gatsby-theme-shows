import React from "react";
import Image from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

import { Box } from "../Box";
import { Text } from "../Text";

export default function ImageAlt({ title, altLogoMaxWidth, ...props }) {
  const data = useStaticQuery(graphql`
    query ImageAltQuery {
      file(relativePath: { eq: "image-alt-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 400, grayscale: true) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Box {...props} position="relative" bg="brand" width={1}>
      <Box display="flex" justifyContent="center" alignItems="center" width={1} height="100%" opacity={0.35}>
        <Image style={{ width: "100%", maxWidth: `${altLogoMaxWidth ? altLogoMaxWidth : "250px"}` }} fluid={data.file.childImageSharp.fluid} />
      </Box>
      {title && (
        <Box display="flex" justifyContent="center" alignItems="center" position="absolute" height="100%" width={1} top={0}>
          <Text fontFamily="heading" fontSize="3rem" color="light" textAlign="center">
            {title}
          </Text>
        </Box>
      )}
    </Box>
  );
}
