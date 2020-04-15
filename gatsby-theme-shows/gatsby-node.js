const { createRemoteFileNode } = require(`gatsby-source-filesystem`);

/*exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions;

  createTypes(`interface Show @nodeInterface {
      id: ID!
      title: String!
      slug: String!
      description: String!
      image: String!
      logo: String!
  }`);

  createTypes(`interface Episode @nodeInterface {
    id: ID!
    title: String!
    slug: String!
    description: String!
    embededSrc: String!
    rawSrc: String!
    image: String!
}`);
};*/

function processShow({ show, createNode, createNodeId, createContentDigest }) {
  const showId = createNodeId(`show-${show.id}`);
  const episodeIds = [];

  show.episodes.forEach(episode => {
    const episodeId = createNodeId(`episode-${showId}-${episode.id}`);

    createNode({
      ...episode,
      id: episodeId,
      parent: showId,
      children: [],
      internal: {
        type: `Episode`,
        contentDigest: createContentDigest(episode),
        mediaType: `json`,
        content: JSON.stringify(episode),
      },
    });
    episodeIds.push(episodeId);
  });

  createNode({
    ...show,
    id: showId,
    parent: null,
    children: episodeIds,
    internal: {
      type: `Show`,
      contentDigest: createContentDigest(show),
      mediaType: `json`,
      content: JSON.stringify(show),
    },
  });
}

exports.onCreateNode = async ({ node, createContentDigest, actions, store, cache, createNodeId }) => {
  const { createNode } = actions;

  let fileNode;

  if (node.internal.type === "ShowsJson") {
    processShow({ show: node, createNode, createContentDigest, createNodeId });
  } else if (node.internal.type === "Episode") {
    if (node && node.image) {
      try {
        fileNode = await createRemoteFileNode({
          url: node.image,
          parentNodeId: node.id,
          store,
          cache,
          createNode,
          createNodeId,
        });
      } catch (e) {
        console.error("gatsby-plugin-remote-images ERROR:", e);
      }
    }
  }
  // Adds a field `localImage` or custom name to the node
  // ___NODE appendix tells Gatsby that this field will link to another node
  if (fileNode) {
    node[`localImage___NODE`] = fileNode.id;
  }
};

exports.sourceNodes = () => {
  const showSchema = ({ id, title, slug, description, image, logo }) => ({
    id,
    title,
    slug,
    description,
    image,
    logo,
  });

  const episodeSchema = ({ id, title, slug, description, embededSrc, rawSrc, image }) => ({
    id,
    title,
    slug,
    description,
    embededSrc,
    rawSrc,
    image,
  });
};
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const episodeTemplate = require.resolve(`./src/templates/episode.jsx`);
  const showTemplate = require.resolve(`./src/templates/show.jsx`);

  try {
    const { data } = await graphql(`
      query LandingData {
        allEpisode {
          nodes {
            id
            title
            slug
            description
            image
            embededSrc
            rawSrc
            parent {
              ... on Show {
                id
                title
                slug
                logo
              }
            }
          }
        }
        allShow {
          nodes {
            id
            title
            slug
            image
          }
        }
      }
    `);

    const { allEpisode, allShow } = data;

    allShow.nodes.forEach(show => {
      createPage({
        path: `/${show.slug}/`,
        component: showTemplate,
        context: show,
      });
    });

    allEpisode.nodes.forEach(episode => {
      createPage({
        path: `/${episode.parent.slug}/${episode.slug}/`,
        component: episodeTemplate,
        context: Object.assign({}, episode, { parentId: episode.parent.id }),
      });
    });
  } catch (e) {
    throw e;
  }
};
