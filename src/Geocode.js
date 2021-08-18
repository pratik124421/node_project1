const request = require("request")


const Geocode = (address,callback) =>{
    const code_url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoicHNwMTIzNDUiLCJhIjoiY2tzYmN0MW9lMDVqOTJ0cWszYW43Yjc1ZiJ9.iGwd_jir4L_acpn6cupcaw"
    request({url:code_url,json:true},(error,response)=>{
        if(error){
            callback(undefined,"unable to connect service")
        }
        else if(!response.body.features){
            callback(undefined,"unable to find location")
        }
        else{

            callback({
                lat:response.body.features[0].center[1],
                lot:response.body.features[0].center[1],
                location:response.body.features[0].place_name
            },undefined)
        }
    })
}

module.exports = {Geocode:Geocode}