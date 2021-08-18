const request = require("request")



const Weather = (data,callback) =>{
    const weather_url="http://api.weatherstack.com/current?access_key=4c1b99f5de4cd797c12b7fc70e5e620f&query=" + data.lat + "," + data.lot
    request({url:weather_url,json:true},(error,response)=>{
        if(error){
            callback(undefined,"unable to connect service")
        }
        else{
            callback({temperature:response.body.current.temperature},undefined)
        }
    })
}

module.exports = {Weather:Weather}