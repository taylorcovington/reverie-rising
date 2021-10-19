import { useStaticQuery, graphql } from "gatsby";

export const useLatestBlogPost = () => {
  const data = useStaticQuery(graphql`
    query LatestBlogPostsQuery {
      allWpPost(limit: 3, sort: {fields: date, order: DESC}) {
        edges {
          node {
            id
            title
            uri
            excerpt
            categories {
              nodes {
                name
              }
            }
            featuredImage {
              node {
                localFile {
                childImageSharp {
                  gatsbyImageData(width: 200 , placeholder:TRACED_SVG)
                }
                }
                id
              }
            }
          }
        }
      }
    }
  `)
  return data
}