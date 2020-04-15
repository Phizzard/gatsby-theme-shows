import React from "react";
import { Box } from "../Box";
import { ShowCard } from "../ShowCard";

export default function ShowCardRow({ shows, ...rest }) {
  return (
    <Box display="flex" flexWrap="wrap" mx={-2} {...rest}>
      {shows && shows.length > 0 && shows.map(show => <ShowCard key={show.id} title={show.title} flexBasis={["100%", "48%"]} flexGrow={1} mx={2} mt={3} to={`/${show.slug}/`} />)}
    </Box>
  );
}
