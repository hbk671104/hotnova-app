/** @format */

import * as React from 'react'
import { AppRegistry } from 'react-native'

import { name as appName } from './app.json'
import dva from './app/util/dva'
import Router, { routerMiddleware, routerReducer } from './app/router'

const app = dva({
	initialState: {},
	models: [],
	extraReducers: { router: routerReducer },
	onAction: [routerMiddleware],
	onError(e) {
		console.log('onError', e)
	},
})

const App = app.start(<Router />)

AppRegistry.registerComponent(appName, () => App)
