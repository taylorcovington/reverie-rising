import { useStaticQuery, graphql } from 'gatsby'

export const useMenuQuery = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
      mainMenu: wpMenu(name: {eq: "Main Menu"}) {
        menuItems {
          nodes {
            url
            id
            label
            parentId
          }
        }
      }
      subMenu: wpMenu(name: {eq: "Secondary menu"}) {
        menuItems {
          nodes {
            url
            id
            label
            parentId
          }
        }
      }
    }
  `)

  return data
}
