const express = require("express");
const cors = require("cors");

const dotenv=require('dotenv').config()
const request =require('request');
const app = express();

const PORT=8082
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/apod", (req,res)=>{
  request(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_APOD_KEY}`, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    // console.log(body) // Show the HTML for the Google homepage. 
    return res.send(body)
  }
});
});

app.listen(PORT ||process.env.PORT, () => {
    console.log(`Backend is running on port ${  PORT ||process.env.PORT}`);
  });