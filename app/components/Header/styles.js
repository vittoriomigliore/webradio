import React from 'react';
import {
	StyleSheet
} from 'react-native'

export default StyleSheet.create({
	container: {
		height: 72,
		paddingTop: 10,
		flexDirection: 'row'
	},
	message: {
		flex: 1,
		textAlign: 'center',
		color: 'rgba(255, 255, 255, 0.72)',
		fontWeight: 'bold',
		fontSize: 20,
	},
	image: {
		flex:0.55,
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		opacity: 0.72
	}
});
