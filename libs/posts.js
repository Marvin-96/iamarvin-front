import graphqlRequest from "./graphqlRequest";

// Fragments GraphQL pour éviter la duplication
const postFields = `
  title
  date
  excerpt
  featuredImage {
    node {
      mediaDetails {
        file
        sizes {
          sourceUrl
          width
          height
        }
      }
    }
  }
  categories {
    nodes {
      slug
    }
  }
  slug
  tags {
    edges {
      node {
        name
      }
    }
  }
`;

const postConnectionFields = `
  nodes {
    ${postFields}
  }
  pageInfo {
    endCursor
    hasNextPage
    hasPreviousPage
    startCursor
  }
`;

// Fonction générique pour récupérer les publications
async function getPosts(categoryName, lang = "fr", order = "DESC") {
  const category = lang === "en" ? `${categoryName}-en` : categoryName; // Ajout de la logique de langue
  const query = {
    query: `query getPosts {
      posts(where: {orderby: {field: DATE, order: ${order}}, categoryName: "${category}"}) {
        ${postConnectionFields}
      }
    }`,
  };

  const resJson = await graphqlRequest(query);
  return resJson.data.posts;
}

// Fonctions spécifiques utilisant la fonction générique
export async function getAllPosts(lang = "fr") {
  return getPosts("article", lang);
}

export async function getAllPortfolioPost(lang = "fr") {
  return getPosts("portfolio", lang);
}

export async function getAllGaleriePosts(lang = "fr") {
  return getPosts("galerie", lang, "ASC"); // Ordre croissant pour la galerie
}


export async function getSinglePost(slug, lang = "fr") {
  const query = {
    query: `query getPostSlugs {
      post(id: "${slug}", idType: SLUG) {
        id
        content(format: RENDERED)
        date
        excerpt(format: RENDERED)
        modified
        slug
        title(format: RENDERED)
        featuredImage {
          node {
            mediaDetails {
              sizes {
                width
                height
                sourceUrl
              }
            }
          }
        }
        tags {
          nodes {
            name
            slug
          }
        }
      }
    }`,
  };
  const resJson = await graphqlRequest(query);
  const singlePost = resJson.data.post;
  return singlePost;
}

export async function getPostSlugs(lang = "fr") {
    const query = {
      query: `query getPostSlugs {
          posts(where: {categoryName_contains: "${lang === "en" ? "-en" : ""}"}) {
            nodes {
              slug
            }
          }
        }`,
    };
    const resJson = await graphqlRequest(query);
    const slugs = resJson.data.posts.nodes;
    return slugs;
  }