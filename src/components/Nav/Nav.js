import React from 'react'
import { Link } from 'gatsby'
import { NavWrapper } from './Nav.styles'

const Nav = ({menu, menuType}) => {
  console.log('menuType: ', menuType)
  return (
    <NavWrapper inputColor={menuType === 'main' ?"#E5E8EA" : "#F4F4F4"} fontColor={menuType === 'main' ? "#000000" : "#878787"}>
        <ul>
        {menu.nodes.map(navItem => (
          <li>
            <Link key={navItem.id} to={navItem.url} activeClassName="nav-active">
              {navItem.label}
            </Link>
          </li>
        ))}
      </ul>
    </NavWrapper>
  )
}

export default Nav