import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'

export const StyledImg = styled(GatsbyImage)`
  max-height: 600px;
  margin-bottom: 60px;
  
`
export const Gradient = styled.div`
width: 100%;
height: 100%;
background: linear-gradient(
  rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)
);
  
`

export const Wrapper = styled.div`
  position: relative;
`

export const HeroWrapper = styled.div`
    position: absolute;
    top: 0%;
    left: 0%;
    display: flex;
    flex-direction: column;
    text-align: left;
    background: linear-gradient( rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7));
    padding: 150px;
    width: 100%;
    height: 100%;
    padding-left: 40%;
    line-height: 10px;
`

// position: absolute;
  // top: 18%;
  // left: 41%;
  // display: flex;
  // flex-direction: column;
  // align-items: left;