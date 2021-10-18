import React, { useState } from 'react'
import { Footer } from '../Footer/Footer'
import Header from '../Header/Header'
import { GlobalStyles, Primary } from './Layout.styles'

const Layout = ({children}) => {
  const [ isMenuOpen, setIsMenuOpen ] = useState(false)
  return (
    <div>
      <GlobalStyles />
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout