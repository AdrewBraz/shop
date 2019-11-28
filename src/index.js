import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './css/style.styl'
import NotFound from './components/NotFound'

const Root = () => {
    return( 
      <BrowserRouter >
        <Switch>
          <Route exact path="/" component={ NotFound }/>
        </Switch>
      </BrowserRouter>
    )
}

render( <Root/>, document.getElementById('main'))