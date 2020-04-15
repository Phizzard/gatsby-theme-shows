import React from "react";

import { Box } from "../Box";
import { EpisodeCard } from "../EpisodeCard";

export default function EpisodeCardRow({ episodes, children, altLogoMaxWidth, ...props }) {
  return (
    <Box display="flex" flexWrap="wrap" mx={-2} {...props}>
      {episodes &&
        episodes.length > 0 &&
        episodes.map(episode => (
          <EpisodeCard
            key={episode.id}
            flexBasis={["50%", "23%"]}
            flexGrow={1}
            mx={2}
            mt={3}
            title={episode.title}
            altLogoMaxWidth={altLogoMaxWidth}
            to={`/${episode.parent.slug}/${episode.slug}`}
            imageFluid={episode.localImage && episode.localImage.childImageSharp.fluid}
          />
        ))}
    </Box>
  );
}
