import PropTypes from 'prop-types';
import React from 'react';
import {View} from 'react-native';

import {AlbumArt} from '../AlbumArt'
import {Controls} from '../Controls'
import {TrackDetails} from '../TrackDetails'

import Video from 'react-native-video';

import styles from './styles'

class Player extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			paused: true,
		};

		this.props.radio.getDetails()
		.then( (res) => {
			this.setState({
				details: res
			})
		})
		.catch((error) => {
			console.error(error);
		});

		this.props.radio.getAlbumArtUri()
		.then( (res) => {
			this.setState({
				albumUri: res
			})
		})
		.catch((error) => {
			console.error(error);
		});
	}

	onProgress(){
		this.props.radio.getDetails()
		.then( (res) => {
			this.setState({
				details: res
			})
		})
		.catch((error) => {
			console.error(error);
		});

		this.props.radio.getAlbumArtUri( this.state.albumUri )
		.then( (res) => {
			this.setState({
				albumUri: res
			})
		})
		.catch((error) => {
			console.error(error);
		});
	}

	render() {
		console.log(this.state)
		const video = (
			<Video
				ref="audioElement"
				progressUpdateInterval={this.props.progressInterval}	// Delay in milliseconds between onProgress events in milliseconds.
				source = {{uri: this.props.radio.getRadioUri()}} 		// Can be a URL or a local file.
				paused = {this.state.paused} 							// Pauses playback entirely.
				playWhenInactive = {true}
				playInBackground = {true}
				ignoreSilentSwitch = "ignore"							// Required for play in background on iOS
				onProgress = {this.onProgress.bind(this)}				// Callback function that is called every progressInterval
				//onError = {this.videoError} 							// Callback when video cannot be loaded
				style = {styles.audioElement}
			/>
		);

		return (
			<View style={styles.container} >
				<AlbumArt picUri = {this.state.albumUri} />
				<TrackDetails description = {this.state.details} />
				<Controls
					onPressPlay={() => this.setState({paused: false})}
					onPressPause={() => this.setState({paused: true})}
					paused={this.state.paused}
				/>
				{video}
			</View>
		);
	}
}

export default Player;
