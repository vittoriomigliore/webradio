import React from 'react';
import {
	StyleSheet
} from 'react-native'

export default StyleSheet.create({
	container: {
		flex: 2,
		paddingTop: 30,
		flexDirection: 'row',
		paddingLeft: 20,
		alignItems: 'center',
		paddingRight: 20,
	},
	detailsWrapper: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		//height: 20
	},
	title: {
		fontSize: 16,
		fontWeight: 'bold',
		color: 'white',
		textAlign: 'center',
	},
});
