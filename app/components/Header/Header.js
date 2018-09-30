import PropTypes from 'prop-types';
import React from 'react';
import { View, Text,Image } from 'react-native';

import styles from './styles'

const Header = ({
  //message
  iconUri
}) => (
  <View style={styles.container}>
    <Image
        style={styles.image}
        source={{uri: iconUri}}
    />
  </View>
);

export default Header;

Header.propTypes = {
	iconUri: PropTypes.string
}
