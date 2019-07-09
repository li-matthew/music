import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './pages/home'
import Tracks from './pages/tracks'
import Cart from './pages/cart'
import Contact from './pages/contact'

const Router = () => (
	<Switch>
		<Route exact path="/" component = {Home} />
		<Route exact path="/tracks" component = {Tracks} />
		<Route exact path="/cart" component = {Cart} />
		<Route exact path="/contact" component = {Contact} />
	</Switch>
)

export default Router;	