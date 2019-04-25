let request = require('request');
let cheerio = require('cheerio');

// Rest API Path

const url = 'http://openapi.airport.kr/openapi/service/';

// Issued API Key
const key = 'sU4OpaoIxSzS2lAho76iBWqAgGX%2FNL3dJvKeVMpCuJH%2F3GyguGqw3Fdd2Gh2OKMY7vDIYewVXeKaP52uWqdiSQ%3D%3D';

//const api_url = url + '?serviceKey=' + key + '&flightId=' + flightId;

function getFlightId(){
    return new Promise((resolve) => {
        request("http://openapi.airport.kr/openapi/service/StatusOfPassengerFlights/getPassengerArrivals"+"?serviceKey="+key, function(err, res, body) {
            if (!err && res.statusCode == 200) {
                let $ = cheerio.load(body)
                $('flightId').each(function(i, arrivals) {
                    let flightId = $(this);
                    let gate = $(this).next();
                    console.log(flightId.text() + " at Gate " + gate.text());
                })
            }
        })
    })
}

getFlightId();