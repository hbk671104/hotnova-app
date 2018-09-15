/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

function multiply(n1: number, n2: number): number {
	return n1 * n2;
}

type Props = {};
export default class App extends Component<Props> {
	render() {
		return (
			<View style={styles.container}>
				<Text>{multiply(14, 'a')}</Text>
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
