const request = require('request');

var getWeather = (lat,lng,callback) =>{
    request({
        url:`https://api.darksky.net/forecast/e790cda42f09e1e836805af7ea512a4c/${lat},${lng}`,
        json:true
    },(error,response,body) => {
        if(!error && response.statusCode === 200){
            callback(undefined, {
                temperature:body.currently.temperature,
                apparentTemperature:body.currently.apparentTemperature
            });
        } else {
            callback('Unable to fetch weather');
        }
    
    });
}

module.exports.getWeather = getWeather;

