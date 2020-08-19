var bodyParser = require("body-parser");
methodOverride = require("method-override");

express = require("express");
app = express();

// Defining Routes
//require("./routes/routes")(app);

	

// App config
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
const home = require("./routes/home.js");
const sendEmailGrid = require("./routes/sendEmailGrid.js");
app.use(home);
app.use(sendEmailGrid);

app.listen(process.env.PORT, process.env.IP, function(){
	
	//console.log("SERVER IS RUNNING");
});