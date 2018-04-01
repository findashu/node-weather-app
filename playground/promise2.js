const request = require('request');

var geoCodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        var encodedAddress = encodeURIComponent(address);
    request({
        url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBZM7p8k1HtxFw5lQHTYRIUwdDtj4g6DPc`,
        json:true
    }, (error, response, body) => {
        if(error){
            reject('Unable to connect to Google Servers.');
        } else if(body.status === 'ZERO_RESULTS'){
            reject('Unable to find the address.');
        } else if(body.status === 'OK'){
            let add = {
                address:body.results[0].formatted_address,
                latitude:body.results[0].geometry.location.lat,
                longitude:body.results[0].geometry.location.lng
            }
            resolve(add);
        }
    });
    })

}

geoCodeAddress('19146').then((location) => {
    console.log(JSON.stringify(location,undefined, 2));
}).catch((errorMsg) => {
    console.log(errorMsg);
})