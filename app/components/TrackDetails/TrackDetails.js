import PropTypes from 'prop-types';
import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles'

const TrackDetails = ({
  description
}) => (
	<View style={styles.container}>
		<View style={styles.detailsWrapper}>
			<Text style={styles.title}>{description}</Text>
		</View>
	</View>
);

export default TrackDetails;
