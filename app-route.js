const yargs = require('yargs');
const axios = require('axios');

// const argv = yargs
//     .options({
//         route: {
//             demand:true,
//             alias:'route',
//             describe:'route to fetch weather for',
//             string: true
//         },
//         stop: {
//             demand:true,
//             alias:'stop',
//             describe:'route to fetch weather for',
//             string: true
//         },
//         direction: {
//             demand:true,
//             alias:'route',
//             describe:'route to fetch weather for',
//             string: true
//         }
//     })
//     .help()
//     .alias('help', 'h')
//     .argv;

var getRoutes = `http://svc.metrotransit.org/NexTrip/Routes`;

var routeNo;
var direcCode;
axios.get(getRoutes).then((response) => {
       var route =  response.data.filter((d) => d.Description == 'METRO Blue Line')
        routeNo = route[0].Route;
        var direction = ` http://svc.metrotransit.org/NexTrip/Directions/${routeNo}`;
        return axios.get(direction);
}).then((response) => {
    var direc = response.data.filter((d) => d.Text.toLowerCase().substr(0,5) == 'north');
     direcCode = direc[0].Value;
    var stop = `http://svc.metrotransit.org/NexTrip/Stops/${routeNo}/${direcCode}`;
    return axios.get(stop);
}).then((response) => {
    var stp = response.data.filter((d) => d.Text == '28th Ave Station');
    var stpCode = stp[0].Value;
    var t = `http://svc.metrotransit.org/NexTrip/${routeNo}/${direcCode}/${stpCode}`;
    return axios.get(t);
}).then((response) => {
    var time = response.data[0].DepartureText;
    console.log(time);
}).catch((e) => {
    console.log(e);
});