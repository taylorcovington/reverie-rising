import React from 'react'
import { graphql } from 'gatsby'

const wpPost = ({ data }) => {
  console.log('post data: ', data)
  return (
    <div>
      <h1>{data.wpPost.title}</h1>
      
    </div>
  )
}

export default wpPost

export const query = graphql`
  query PostById($id: String) {
	wpPost(id: {eq: $id}) {
   __typename
    id
    uri
    title
    content
  }
}
`