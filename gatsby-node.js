exports.createPages = async({actions, graphql, reporter}) => {
  const result = await graphql(`
  {
    allWpPost {
      nodes {
        __typename
        uri
        databaseId
        id
      }
    }
  }
  `)

  console.log(result)

  if(result?.errors) {
    reporter.error('There was an error fetching posts. ', result.errors)
  }

  const { allWpPost } = result?.data

  let template = require.resolve('./src/templates/wpPost.js')

  allWpPost.nodes.map( post => ( 
    actions.createPage({
      path:post.uri,
      component: template,
      context: post
    })
    ))
}