import * as React from 'react'
import { BackHandler } from 'react-native'
import {
	createStackNavigator,
	createBottomTabNavigator,
	createSwitchNavigator,
	NavigationActions,
} from 'react-navigation'
import {
	reduxifyNavigator,
	createReactNavigationReduxMiddleware,
	createNavigationReducer,
} from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'

// Containers
import Login from './container/auth/login'
import Main from './container/main'

const AuthStack = createStackNavigator({
	Login,
})

const ContentStack = createStackNavigator({
	Main,
})

const AppRouter = createSwitchNavigator({
	Auth: AuthStack,
	Content: ContentStack,
})

export const routerReducer = createNavigationReducer(AppRouter)

export const routerMiddleware = createReactNavigationReduxMiddleware(
	'root',
	state => state.router,
)

const App = reduxifyNavigator(AppRouter, 'root')

function getActiveRouteName(navigationState) {
	if (!navigationState) {
		return null
	}
	const route = navigationState.routes[navigationState.index]
	if (route.routes) {
		return getActiveRouteName(route)
	}
	return route.routeName
}

class Router extends React.PureComponent {
	componentWillMount() {
		BackHandler.addEventListener('hardwareBackPress', this.backHandle)
	}

	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.backHandle)
	}

	backHandle = () => {
		const { dispatch, router } = this.props
		const subRouter = router.routes[router.index]
		if (subRouter.index === 0) {
			Alert.alert('提示', '确认退出 Hotnova ？', [
				{ text: '确认', onPress: () => BackHandler.exitApp() },
				{ text: '取消', style: 'cancel' },
			])
		}

		dispatch(NavigationActions.back())
		return true
	}

	render() {
		const { dispatch, router } = this.props

		return <App dispatch={dispatch} state={router} />
	}
}

export default connect(({ router }) => ({ router }))(Router)
