import * as React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import styles from './style'

@connect()
class Login extends React.PureComponent {
	handleLogin = () => {
		this.props.dispatch(
			NavigationActions.navigate({
				routeName: 'Content',
			}),
		)
	}

	render() {
		return (
			<View style={styles.container}>
				<Text onPress={this.handleLogin}>Login</Text>
			</View>
		)
	}
}

export default Login
