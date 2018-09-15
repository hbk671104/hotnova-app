/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

type Props = {};

export default class App extends React.Component<Props> {
	render() {
		return (
			<View style={styles.container}>
				<Text>哈噶</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
});
