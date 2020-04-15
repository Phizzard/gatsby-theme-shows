import React from "react";
import { graphql } from "gatsby";

import { Layout } from "../components/Layout";
import { Text } from "../components/Text";
import { EpisodeCard } from "../components/EpisodeCard";
import { EpisodeCardRow } from "../components/EpisodeCardRow";
import { ShowCardRow } from "../components/ShowCardRow";

export default function({ data }) {
  const { allEpisode, allShow } = data;
  const [latestEpisode, ...episodes] = allEpisode.nodes;

  return (
    <Layout>
      <Text as="h2" fontFamily="heading" fontSize="2.5rem" color="light" fontWeight="bold" mt={0} mb={3}>
        Latest
      </Text>
      <EpisodeCard variant="withDeck" title={latestEpisode.title} deck={latestEpisode.description} to={`/${latestEpisode.parent.slug}/${latestEpisode.slug}`} imageFluid={latestEpisode.localImage && latestEpisode.localImage.childImageSharp.fluid} />
      <EpisodeCardRow episodes={episodes} mb={4} altLogoMaxWidth="150px" />
      <Text as="h2" fontFamily="heading" fontSize="2.5rem" color="light" fontWeight="bold" mt={0} mb={3}>
        Shows
      </Text>
      <ShowCardRow shows={allShow.nodes} mb={4} />
    </Layout>
  );
}

export const query = graphql`
  query LandingData {
    allEpisode {
      nodes {
        id
        title
        description
        image
        slug
        localImage {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        parent {
          ... on Show {
            slug
          }
        }
      }
    }
    allShow {
      nodes {
        id
        title
        image
        slug
      }
    }
  }
`;
