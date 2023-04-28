const mongoose = require("mongoose");
const config = require("./config/config");
const app = require("./app");
const port = 8082
let server;

mongoose.connect(config.mongoose.url,config.mongoose.options)
.then(()=>{
    console.log("Connected to Mongodb");
    server = app.listen(config.port, () => {
        console.log("listing to port",config.port);
    })
})
.catch()
