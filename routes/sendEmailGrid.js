const express = require("express");
const router = express.Router();

app.post("/sendEmailGrid", function(req, res){
	
	
			const sgMail = require('@sendgrid/mail');
			sgMail.setApiKey(process.env.SENDGRID_API_KEY);
			const msg = req.body.email;
			
			x = new Promise((resolve,reject) => {
			sgMail.send(msg, (error,body) => {
				resolve(body[0].statusCode);
			})});
	
			x.then((message) => {
				
				if (message != 202){
					var API_KEY = '9848d35cfb6a174e877ce40f12ca785f-203ef6d0-7b87bcfc';
					var DOMAIN = 'sandbox7560872ce4fb410bb8e61b8291f401cc.mailgun.org';
					var mailgun = require('mailgun-js')({apiKey: API_KEY, domain: DOMAIN});

					const data = req.body.email;
					
					mailgun.messages().send(data, (error, body) => {})
					
				}
				
			})
	


res.redirect("/");
});

module.exports = router;