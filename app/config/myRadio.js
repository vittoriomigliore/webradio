import Util from 'util';
import RNFetchBlob from 'rn-fetch-blob'

import * as radios from './radios.json'

// select your radio
radio = radios[0].radiorevolution;



const myRadio = {
	getName(){
		return radio.name;
	},

	getIconUri(){
		return radio.iconUri;
	},

	getRadioUri(){
		return radio.radioUri;
	},

	getDetailsUri(){
		return radio.detailsUri
	},

	getDetails(){
		return new Promise( (resolve,reject) => {
			fetch(radio.detailsUri)
			.then((response) => {
		 		resolve(response.text())
	  		})
			.catch((error) => {
	   			// error handling
	   			reject(error)
	 		});
		})
	},

	getAlbumArtUri( previousUri ){
		epoch = (new Date).getTime();
		uri = Util.format( radio.albumUri, epoch );

		return new Promise( (resolve,reject) => {
			mimetype_attachment = 'image/jpeg'

			RNFetchBlob.fetch('GET', uri, {})
			.then((response) => {
				let base64Str = response.base64();
				var imageBase64 = 'data:'+mimetype_attachment+';base64,'+base64Str;
				// Return base64 image
				resolve(imageBase64)
			})
			.catch((error) => {
	   			// error handling
	   			resolve(previousUri)
	 		});
		})
	}

}

export default myRadio
