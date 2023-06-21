const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const routes = require("./routes");
const passport = require("passport");
const cors = require("cors")

require("./config/passport")(passport)

mongoose.connect("mongodb://mongo:27017/acemdb", {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
            console.log("database connected")
            const app = express()
            app.use(bodyParser.urlencoded({extended: true}))
            app.use(bodyParser.json())
            app.use(cors())
            app.use("/api/auth", routes.auth)
            app.use("/api", passport.authenticate("jwt", {session: false}), routes.posts)

            app.listen(3000, () =>{
                console.log("running port 3000")  
                console.log("access to http://localhost:3000")
            })
        })
        .catch(err => {
            console.error("Mongo Connection Error", err);
            process.exit();
        });




//connect to database
//pass:63mnAGe8Lnm5MCpE
//pass:m!5UY_W_@gnDWda
// mongoose.connect(
//     "mongodb+srv://mattsutaking:63mnAGe8Lnm5MCpE@cluster0.f45vcvw.mongodb.net/Posts?retryWrites=true&w=majority"
//     )
//     .then(() => console.log("database connected"))
//     .catch((err) => console.log(err));

// app.listen(3000, () =>{
//     console.log("running port 3000")  
//     console.log("access to http://localhost:3000");
// })

