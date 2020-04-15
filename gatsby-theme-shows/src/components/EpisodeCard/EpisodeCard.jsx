import React from "react";
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { string, oneOf } from "prop-types";
import { Link } from "gatsby";
import Image from "gatsby-image";

import { Box } from "../Box";
import { Card } from "../Card";
import { ImageAlt } from "../ImageAlt";
import { Text } from "../Text";

export default function EpisodeCard({ title, deck, variant = "base", imageFluid, altLogoMaxWidth, to, ...props }) {
  const withDeck = variant === "withDeck";

  return (
    <CardContainer boxShadow="none" p={0} bg={withDeck ? "dark" : "transparent"} {...props}>
      <CardLink to={to}>
        <Box display="flex" flexWrap="wrap" flexDirection={withDeck ? "row" : "column"}>
          {imageFluid ? <Image style={{ width: "100%" }} fluid={imageFluid} /> : <ImageAlt display="flex" flexBasis={withDeck ? ["100%", "60%"] : undefined} height={withDeck ? 400 : 175} altLogoMaxWidth={altLogoMaxWidth} />}

          <Box flexDirection="column" flexBasis={["100%", "40%"]} display="flex" justifyContent="center" width={1} p={2}>
            <Text color="light" fontFamily="heading" fontSize="1.5rem" textAlign="center" mb={2}>
              {title}
            </Text>
            {withDeck && (
              <Text color="light" fontSize="1.1rem" textAlign="center">
                {deck}
              </Text>
            )}
          </Box>
        </Box>
      </CardLink>
    </CardContainer>
  );
}

const CardContainer = styled(Card)`
  cursor: pointer;
  &:hover {
    background-color: ${themeGet("colors.dark", "#000")};
  }
`;

const CardLink = styled(Link)`
  color: transparent;
`;

EpisodeCard.propTypes = {
  title: string,
  deck: string,
  variant: oneOf(["base", "withDeck"]),
};
