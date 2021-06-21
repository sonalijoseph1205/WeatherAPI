const express = require("express");
const https = require("https");
const bodyParser= require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res)
{
res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res)
{
  const query=req.body.cityName;
  const apiKey="cc15f4e135ffe06f5811cd84c55a2364";
  const unit="metric";
  const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey+"&units="+unit;
  https.get(url,function(response)
  {
  console.log(response.statusCode);//logs only the status code
  //.on method let's us tap into the response that we get
  //back from the ext server
  response.on("data",function(data)
  {
    const weatherData = JSON.parse(data);
    const temp=weatherData.main.temp;

    const country = weatherData.sys.country;
    const weatherDes=weatherData.weather[0].description;
    const icon=weatherData.weather[0].icon;
    const imageURL=" http://openweathermap.org/img/wn/"+icon+"@2x.png";
    console.log("temprature is : "+temp);
  //tapping iinto the res we get back from the API to display it on the website
    res.write("<h1>The temperature in " +query+" , "+country+ " is : "+temp+" degree Celsius</h1>");
    res.write("<h2>Weather Description: "+weatherDes+"</h2>");
    res.write("<img src="+imageURL+">");
    res.send()
  });
  });

})
app.listen("3000",function()
{

  console.log("Server has started");
});