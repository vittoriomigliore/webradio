import React from 'react';
import {
	StyleSheet,
	Dimensions
} from 'react-native'

const {
	width,
	height
} = Dimensions.get('window');
const imageSize = width - 48;

export default StyleSheet.create({
	container: {
		flex: 9,
		paddingLeft: 24,
		paddingRight: 24,
	},
	image: {
		width: imageSize,
		height: imageSize,
	},
});
