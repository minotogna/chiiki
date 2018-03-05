import React from 'react'

import Header from './header'
import Footer from './footer'

class PageTemplate extends React.Component {

  render () {
    const {children} = this.props

    return <div>
      <Header/>
      {children}
      <Footer/>
    </div>
  }
}

export default PageTemplate
