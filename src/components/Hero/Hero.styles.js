import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'

export const StyledImg = styled(GatsbyImage)`
  max-height: 600px;
  margin-bottom: 60px;
  
`

export const Wrapper = styled.div`
  position: relative;
`

export const HeroWrapper = styled.div`
position: absolute;
top: 6%;
left: 47%;
display: flex;
flex-direction: column;
align-items: left;
`

// v1
// position: absolute;
  // top: 18%;
  // left: 41%;
  // display: flex;
  // flex-direction: column;
  // align-items: left;

// v2
// position: absolute;
// top: 6%;
// left: 47%;
// display: flex;
// flex-direction: column;
// align-items: left;


// v3
  // position: absolute;
  // top: 0%;
  // left: 0%;
  // display: flex;
  // flex-direction: column;
  // text-align: left;
  // background: linear-gradient( rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7));
  // padding: 150px;
  // width: 100%;
  // height: 100%;
  // padding-left: 40%;
  // line-height: 10px;