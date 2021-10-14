import React, { useState } from 'react'
import Header from '../Header/Header'
import { GlobalStyles, Primary } from './Layout.styles'

const Layout = ({children}) => {
  const [ isMenuOpen, setIsMenuOpen ] = useState(false)
  return (
    <div>
      <GlobalStyles />
      <Header />
      {children}
    </div>
  )
}

export default Layout