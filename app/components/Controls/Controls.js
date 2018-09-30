import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles'

const Controls = ({
	paused,
    onPressPlay,
    onPressPause,
}) => (
	<View style={styles.container}>
		{!paused ?
			<TouchableOpacity onPress={onPressPause}>
				<View style={styles.playButton}>
					<Image source={require('./img/ic_pause_white_48pt.png')}/>
          		</View>
        	</TouchableOpacity> :
        	<TouchableOpacity onPress={onPressPlay}>
          		<View style={styles.playButton}>
            		<Image source={require('./img/ic_play_arrow_white_48pt.png')}/>
          		</View>
        	</TouchableOpacity>
      	}
	</View>

);

export default Controls;
