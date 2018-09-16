import * as React from 'react'
import { View, Text } from 'react-native'

import styles from './style'

class Main extends React.PureComponent {
	render() {
		return (
			<View style={styles.container}>
				<Text>Main</Text>
			</View>
		)
	}
}

export default Main
