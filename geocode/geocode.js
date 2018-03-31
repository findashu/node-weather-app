const request = require('request');

module.exports.geoCodeAddress = (address,callback) => {
    var encodedAddress = encodeURIComponent(address);

    request({
        url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBZM7p8k1HtxFw5lQHTYRIUwdDtj4g6DPc`,
        json:true
    }, (error, response, body) => {
        if(error){
            callback('Unable to connect to Google Servers.');
        } else if(body.status === 'ZERO_RESULTS'){
            callback('Unable to find the address.');
        } else if(body.status === 'OK'){
            let add = {
                address:body.results[0].formatted_address,
                latitude:body.results[0].geometry.location.lat,
                longitude:body.results[0].geometry.location.lng
            }
            callback(undefined,add);
        }
    });
}

//e790cda42f09e1e836805af7ea512a4c

// https://api.darksky.net/forecast/[key]/[latitude],[longitude]
