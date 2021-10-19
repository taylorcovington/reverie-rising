import React from 'react'
import { Link } from 'gatsby'
import { PostWrapper, StyledPostImg } from './LatestBlogPost.styles'

export const LatestBlogPost = ({title, uri, excerpt, category, image}) => {
  return (
    <PostWrapper>
      <p>{title}</p>
      <p>{category}</p>
      <StyledPostImg image={image}  alt='Post Image'/>

      <div dangerouslySetInnerHTML={{__html: `<p>${excerpt}</p>`}}/>
      <Link to={`blog/${category}/${uri}`}>Continue Reading</Link>
    </PostWrapper>
  )
}
