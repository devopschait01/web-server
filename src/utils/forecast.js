const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/28908e408275e2ea3eda63874b2b1e58/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            
            forecaststr = body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + 'F degress out.'
            forecaststr = forecaststr + ' There is a ' + body.currently.precipProbability + '% chance of rain.'
            forecaststr = forecaststr + ' Expected high temparature is  ' + body.daily.data[0].temperatureHigh + 'F degrees. '
            forecaststr = forecaststr + ' Expected low temparature is  ' + body.daily.data[0].temperatureLow + 'F degrees.'
            callback(undefined, forecaststr)
        }
    })
}

module.exports = forecast