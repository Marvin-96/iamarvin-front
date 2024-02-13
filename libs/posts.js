import graphqlRequest from "./graphqlRequest"

export async function getAllPosts()  {
    
    const query = { 
        
        query: `query getAllposts {
          posts(where: {orderby: {field: DATE, order: ASC}, categoryName: "article"}) {
            nodes {
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
            }
            pageInfo {
              endCursor
              hasNextPage
              hasPreviousPage
              startCursor
            }
          }
        }`
    
    };


const resJson = await graphqlRequest(query);
const allPosts = resJson.data.posts;

return allPosts;
}


export async function getAllPortfolioPost()  {
    
  const query = { 
      
      query: `query getPortfolioPost  {
        posts(where: {orderby: {field: DATE, order: ASC}, categoryName: "portfolio"}) {
          nodes {
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
          }
          pageInfo {
            endCursor
            hasNextPage
            hasPreviousPage
            startCursor
          }
        }
      }`
  
  };


const resJson = await graphqlRequest(query);
const allPortfolioPost = resJson.data.posts;

return allPortfolioPost;
}
export async function getAllGaleriePosts()  {
    
  const query = { 
      
      query: `query getGaleriePost  {
        posts(where: {orderby: {field: DATE, order: ASC}, categoryName: "galerie"}) {
          nodes {
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
          }
          pageInfo {
            endCursor
            hasNextPage
            hasPreviousPage
            startCursor
          }
        }
      }`
  
  };


const resJson = await graphqlRequest(query);
const allGaleriePost = resJson.data.posts;

return allGaleriePost;
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
    }`
  };
  const resJson = await graphqlRequest(query);
  const singlePost = resJson.data.post;
  return singlePost;
}


export async function getPostSlugs() {

  const query = { 
        
    query: `query getPostSlugs {
        posts {
          nodes {
            slug
          }
        }
      }`
  };
  const resJson = await graphqlRequest(query);
  const slugs = resJson.data.posts.nodes;
  return slugs;
}