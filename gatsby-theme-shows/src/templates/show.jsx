import React from "react";
import { graphql } from "gatsby";

import { Layout } from "../components/Layout";
import { Text } from "../components/Text";
import { EpisodeCard } from "../components/EpisodeCard";

export default function({ data, pageContext }) {
  const { title = "Show" } = pageContext;
  const { allEpisode } = data;

  return (
    <Layout>
      <Text as="h2" fontFamily="heading" fontSize="2.5rem" color="light" fontWeight="bold" mt={0} mb={3}>
        {title}
      </Text>
      {allEpisode && allEpisode.nodes && allEpisode.nodes.length > 0 && allEpisode.nodes.map(episode => <EpisodeCard variant="withDeck" title={episode.title} deck={episode.description} to={`/${episode.parent.slug}/${episode.slug}/`} mb={4} />)}
    </Layout>
  );
}

export const query = graphql`
  query ShowData($id: String) {
    allEpisode(filter: { parent: { id: { eq: $id } } }) {
      nodes {
        id
        title
        image
        slug
        parent {
          ... on Show {
            slug
          }
        }
      }
    }
  }
`;
