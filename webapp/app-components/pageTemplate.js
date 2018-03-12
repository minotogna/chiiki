import React from 'react'

import Header from './header'
import Footer from './footer'

const PageTemplate = ({children = undefined, i18n}) =>
  <div>
    <Header i18n={i18n}/>
    {children}
    <Footer i18n={i18n}/>
  </div>

export default PageTemplate
