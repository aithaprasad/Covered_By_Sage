const express = require("express");
const router = express.Router();

router.get("/", function(req, res){
	
	//console.log("Function called");
	res.render("form");

});

module.exports = router;