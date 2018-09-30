import React from 'react';
import {
	StyleSheet
} from 'react-native'

export default StyleSheet.create({
	container: {
		flex: 4,
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'center',
		paddingTop: 20,
	},
	playButton: {
		height: 72,
		width: 72,
		borderWidth: 1,
		borderColor: 'white',
		borderRadius: 72 / 2,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
