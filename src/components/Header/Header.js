import React from 'react'
import { Link } from 'gatsby'
import logo from '../../images/logo.png'
import { useMenuQuery } from '../../hooks/useMenuQuery'
import { HeaderWrapper, LogoWrapper } from './Header.styles'
import Nav from '../Nav/Nav'

const Header = () => {
  const data = useMenuQuery()
  const { site, mainMenu, subMenu } =  data 
  const { siteMetadata } = site
  
  //main heading data 
  const { menuItems } = mainMenu
  console.log('data: ', data)
  console.log('siteMetaData: ', siteMetadata)
  //end main heading data

  //sub heading data
  const {menuItems: subMenuItems} = subMenu
  //end sub heading data
  
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Link to='/'>
          <img src={logo} alt={siteMetadata.title}/>
        </Link>
      </LogoWrapper>
      <div>
      <Nav menu={menuItems} menuType='main'/>
      </div>
      <div>
      <Nav menu={subMenuItems} menuType='sub'/>
      </div>
    </HeaderWrapper>
  )
}

export default Header