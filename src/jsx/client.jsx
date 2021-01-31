import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Layout from './pages/Layout'
import Todos from './pages/Todos'
import Archives from './pages/Archives'
import Settings from './pages/Settings'


const app = document.getElementById('app')
ReactDOM.render(
  <Router>
    <Layout>
      <Route exact path='/' component={Todos}></Route>
      <Route exact path='/archives' component={Archives}></Route>
      <Route path='/settings' component={Settings}></Route>
    </Layout>
  </Router>, app
)


