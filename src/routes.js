import React from 'react'
import {browserHistory, Router, Route, Redirect} from 'react-router'

const Home = React.createClass({
  render: function() {
    return (<div>Hello world</div>)
  }
})

export const makeRoutes = () => (
    <Router>
      <Route path="/" component={Home} />
      <Redirect from="*" to="/" />
    </Router>
  )

export default makeRoutes
