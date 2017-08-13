import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match, Miss } from 'react-router'

import './css/style.styl'
import App from './components/App'
import Store from './components/Store'
import NotFound from './components/NotFound'

const Root = () => {
    return( 
      <BrowserRouter >
        <div>
          <Match exactly pattern="/" component={ Store }/>
          <Match exactly pattern="/store/:storeId" params={this} component={ App }/>
          <Miss component={ NotFound }/>
        </div>
      </BrowserRouter>
    )
}

render( <Root/>, document.getElementById('main'))