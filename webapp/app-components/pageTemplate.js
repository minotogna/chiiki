import React from 'react'

import Header from './header'
import Footer from './footer'

const PageTemplate = ({children = undefined}) =>
  <div>
    <Header/>
    {children}
    <Footer/>
  </div>

export default PageTemplate
