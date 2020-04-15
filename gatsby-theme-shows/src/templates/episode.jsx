import React, { useState } from "react";
import { graphql } from "gatsby";

import altPoster from "../assets/cat-laptop.jpg";
import { Layout } from "../components/Layout";
import { Text } from "../components/Text";
import { NativeVideoPlayer } from "../components/NativeVideoPlayer";
import { EmbededPlayer } from "../components/EmbededPlayer";
import { EpisodeCard } from "../components/EpisodeCard";

export default function({ data, pageContext }) {
  const { title = "Episode", rawSrc, embededSrc, image } = pageContext;
  const { allEpisode } = data;
  const [srcType] = useState("embeded");

  return (
    <Layout>
      <Text as="h2" fontFamily="heading" fontSize="2.5rem" color="light" fontWeight="bold" mt={0} mb={3}>
        {title}
      </Text>
      {srcType === "native" ? <NativeVideoPlayer src={rawSrc} poster={image ? image : altPoster} /> : <EmbededPlayer src={embededSrc} title={title} />}
      {allEpisode && allEpisode.nodes && allEpisode.nodes.length > 0 && (
        <>
          <Text as="h2" fontFamily="heading" fontSize="2.5rem" color="light" fontWeight="bold" mt={4} mb={3}>
            More Episodes
          </Text>
          {allEpisode.nodes.map(episode => (
            <EpisodeCard key={episode.id} variant="withDeck" title={episode.title} deck={episode.description} to={`/${episode.parent.slug}/${episode.slug}/`} mb={4} />
          ))}
        </>
      )}
    </Layout>
  );
}

export const query = graphql`
  query EpisodeData($parentId: String, $id: String) {
    allEpisode(filter: { parent: { id: { eq: $parentId } }, id: { ne: $id } }) {
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
