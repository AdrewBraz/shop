import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './css/style.styl'
import Store from './components/Store'
import NotFound from './components/NotFound'

const Root = () => {
    return( 
      <BrowserRouter >
        <div>
          {/* <Route exact path="/" component={ Store }/> */}
          <Route path="*" component={ NotFound }/>
        </div>
      </BrowserRouter>
    )
}

render( <Root/>, document.getElementById('main'))