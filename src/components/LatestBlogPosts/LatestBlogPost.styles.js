import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'

export const StyledPostImg = styled(GatsbyImage)`
  height: 350px;
  margin-bottom: 5px;
  
`

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 20px;
  width: 290px;
  text-align: center;
  justify-content: center;
  // border: 1px solid red;
`