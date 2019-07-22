const request = require('request')

const getweather = (longitude,lattitude,callback) => {
    const weatherurl = 'https://api.darksky.net/forecast/28908e408275e2ea3eda63874b2b1e58/' + longitude + ',' + longitude
    
    request({url: weatherurl , json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to Weather API : ')
        } else if (body.error) {
            callback('Invalid geo details : Tryagain!')
        } else {
            callback(undefined, {
                currsum: body.currently.summary,
                dailysum: body.daily.summary,
                hourlysum: body.hourly.summary,
                checkurl: weatherurl
            })
        }

    })
}

module.exports = getweather