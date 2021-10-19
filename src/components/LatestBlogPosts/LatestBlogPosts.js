import React from 'react'
import { getImage } from 'gatsby-plugin-image'
import {useLatestBlogPost} from '../../hooks/useLatestPostsQuery'
import { Container, HeadingWrapper, PostsWrapper } from './LatestBlogPosts.styles'
import { LatestBlogPost } from './LatestBlogPost'

export const LatestBlogPosts = () => {
  const { allWpPost: {edges: posts} } = useLatestBlogPost()
  return (
    <Container>
      <HeadingWrapper>
        <h1>Hot Off The Press</h1>
      </HeadingWrapper>

      <PostsWrapper>
        {posts.map(post => {
          console.log('post: ', post.node)
          const {id, title, uri, excerpt, categories, featuredImage} = post.node
          const category = categories.nodes[0].name
          const imageData = getImage(featuredImage.node.localFile)


          return (
            <LatestBlogPost 
            key={id}
            title={title} 
            uri={uri} 
            excerpt={excerpt} 
            category={category}
            image={imageData}
            />
          )
        })}
      </PostsWrapper>
    </Container>
  )
}
