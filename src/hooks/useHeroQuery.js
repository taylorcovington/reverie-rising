import { useStaticQuery, graphql } from "gatsby";

export const useHeroQuery = () => {
  const data = useStaticQuery(graphql`
  query HeroImageQuery {
    wpPage(databaseId: {eq: 2471}) {
      id
      title
      featuredImage {
        node {
          localFile {
          childImageSharp {
            gatsbyImageData(width: 1920 , placeholder:TRACED_SVG)
          }
          }
          id
        }
      }
    }
  }
  `)
  return data
}