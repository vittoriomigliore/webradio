import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles'

const AlbumArt = ({
  picUri
}) => (
  <View style={styles.container}>
  	<Image
	  style={styles.image}
	  source={{uri: picUri}}
	/>
  </View>
);

export default AlbumArt;
