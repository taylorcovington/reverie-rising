import React from 'react'
import { getImage } from 'gatsby-plugin-image'
import { useHeroQuery } from '../../hooks/useHeroQuery'
import { Wrapper, StyledImg, HeroWrapper, Gradient } from './Hero.styles'

export const Hero = () => {
  const { wpPage: { featuredImage: data }} = useHeroQuery()
  console.log('hero data', data)

  const imageData = getImage(data.node.localFile)

  return (
    <Wrapper>
      <StyledImg image={imageData}  alt='Hero Image'/>
       {/* <Gradient > */}
          <HeroWrapper>
            <h1 style={{color: '#61234C', fontSize: '40px'}}>Reverie</h1>
            <h3 style={{color: '#AD7E4B'}}>/'rev(e)re/ | noun</h3>
            <p style={{fontSize: '20px'}}>1. To dream; to wander</p>
            <p style={{fontSize: '20px'}}>2. A fantastic, visionary or impractical idea</p>
            <p style={{fontSize: '20px'}}>3. a state of being pleasantly lost in one's thoughts; a daydream</p>
          </HeroWrapper>
       {/* </Gradient> */}
    </Wrapper>
  )
}

/* /'rev(e)re/
noun: 1. a state of being pleasantly lost in one's thoughts; a daydream
2. A fantastic, visionary or impractical idea
3. To dream; to wander
*/
