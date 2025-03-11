import graphqlRequest from "./graphqlRequest";

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

async function fetchPosts(categoryName, orderBy = { field: 'DATE', order: 'DESC' }) {
  const query = {
    query: `query getPosts {
      posts(where: {orderby: {field: ${orderBy.field}, order: ${orderBy.order}}, categoryName: "${categoryName}"}) {
        ${postConnectionFields}
      }
    }`,
  };

  const resJson = await graphqlRequest(query);
  return resJson.data.posts;
}

export async function getAllPosts() {
  return fetchPosts("article");
}

export async function getAllPostsEN() {
  return fetchPosts("article-en");
}

export async function getAllPortfolioPost() {
  return fetchPosts("portfolio");
}

export async function getAllPortfolioPostEN() {
  return fetchPosts("portfolio-en");
}

export async function getAllGaleriePosts() {
  return fetchPosts("galerie", { field: 'DATE', order: 'ASC' });
}

export async function getSinglePost(slug) {
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
  return resJson.data.post;
}

export async function getPostSlugs(category) {
  const query = {
    query: `query getPostSlugs {
  posts(where: {categoryName: "${category}"}) {
    nodes {
      slug
    }
  }
}`,
  };
  const resJson = await graphqlRequest(query);
  return resJson.data.posts.nodes;
}