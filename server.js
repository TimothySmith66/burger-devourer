// express dependency
const express = require('express');
 //handle bars dependendency
 const exphbs = require("express-handlebars");
// calls express 
 const app = express();

 const routes = require("./controllers/burgersController.js");

 const PORT = process.env.PORT || 3001;

app.use(express.static("public"));
// For: data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))

// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
app.use(routes);


//port listener
app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
});