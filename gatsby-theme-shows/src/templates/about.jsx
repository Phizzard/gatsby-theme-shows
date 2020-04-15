import React from "react";
import Image from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

import { Layout } from "../components/Layout";
import { Text } from "../components/Text";
import { Box } from "../components/Box";
import { ProfileCard } from "../components/ProfileCard";

export default function() {
  const data = useStaticQuery(graphql`
    query AboutImageQuery {
      file(relativePath: { eq: "image-alt-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Text as="h2" fontFamily="heading" fontSize="2.5rem" color="light" fontWeight="bold" mt={0} mb={3}>
        About Us
      </Text>
      <Box display="flex" flexWrap="wrap" justifyContent="space-around" my={6}>
        <Box maxWidth={300} flexBasis={["100%", "50%"]}>
          <Image fluid={data.file.childImageSharp.fluid} />
        </Box>
        <Box display="flex" flexBasis={["100%", "50%"]} flexDirection="column">
          <Text fontFamily="heading" fontSize="2rem" color="light" fontWeight="bold" textAlign={["center", "right"]} mt={0} mb={3}>
            Two Friends Making Content For Developers
          </Text>
          <Text fontFamily="base" color="light" fontSize="1.25rem" textAlign={["center", "right"]}>
            We're not the first ones to do it (and we're certainly not the best), but we're hoping to create fun, relatable content. Keith is your average developer; a stint of homelessness in his early 20's provided him with incredible psychological damage.
            Phil is from jolly ol' England! He likes marmite, steak & kidney pie, and struggling to make ends meet.
          </Text>
        </Box>
      </Box>
      <Text as="h2" fontFamily="heading" fontSize="2.5rem" color="light" fontWeight="bold" mt={0} mb={3}>
        The Plebs
      </Text>
      <ProfileCard
        name="Phil Tietjen"
        title="Senior Developer, Co-Pleb"
        description="We're not the first ones to do it (and we're certainly not the best), but we're hoping to create fun, relatable content. Keith is your average developer; a stint of homelessness in his early 20's provided him with incredible psychological damage.
            Phil is from jolly ol' England! He likes marmite, steak & kidney pie, and struggling to make ends meet."
        imageFluid={data.file.childImageSharp.fluid}
        mb={4}
        p={4}
      />
      <ProfileCard
        name="Phil Tietjen"
        title="Senior Developer, Co-Pleb"
        description="We're not the first ones to do it (and we're certainly not the best), but we're hoping to create fun, relatable content. Keith is your average developer; a stint of homelessness in his early 20's provided him with incredible psychological damage.
            Phil is from jolly ol' England! He likes marmite, steak & kidney pie, and struggling to make ends meet."
        imageFluid={data.file.childImageSharp.fluid}
        mb={4}
        p={4}
      />
    </Layout>
  );
}
