var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var ServerManager = require('../bll/serverManager');
var _serverManager = new ServerManager();

module.exports.register = function(req, res) {
	if(!req.body.name || !req.body.email || !req.body.password) {
		_serverManager.sendJsonResponse(res, 404, {"message": "All fields required"});
		return;
	}

	var email = req.body.email;

	User
		.find({email: email})
		.exec(function(err, userExist) {
			if(userExist) {
				_serverManager.sendJsonResponse(res, 404, {"message": "Email occupied."});

			}else {
				var user;
				user = new User();
				user.name = req.body.name;
				user.email = req.body.email;
				user.setPassword(req.body.password);

				//Checks user is admin or not
				var isAdmin = false;
				if(req.body.email === 'admin@admin.com' && req.body.password === process.env.ADM_PASS) {
					isAdmin = true;
				}

				user.save(function(err) {
					var token;

					if (err) {
						_serverManager.sendJsonResponse(res, 404, err);

					} else {
						token = user.generateJWT();
						console.log(token);

						_serverManager.sendJsonResponse(res, 200, {"token" : token, "isAdmin": isAdmin});
					}
				});
			}
		});
};

module.exports.login = function(req, res) {
	if(!req.body.email || !req.body.password) {
		_serverManager.sendJsonResponse(res, 404, {"message": "All fields required"});
		return;
	}

	//Check user is admin or not
	var isAdmin = false;
	if(req.body.email === 'admin@admin.com' && req.body.password === 'admin') {
		isAdmin = true;
	}

	//Pass name of strategy and a callback to authenticate
	passport.authenticate('local', function(err, user, info){
		var token;

		//Return an error if Passport returns an error
		if (err) {
			_serverManager.sendJsonResponse(res, 404, err);
			return;
		}

		//If Passport returned a user instance, generate and send a JWT
		if(user){
			token = user.generateJWT();
			_serverManager.sendJsonResponse(res, 200, {"token" : token, "isAdmin": isAdmin});

		} else {//Otherwise return info message (why authentication failed)
			_serverManager.sendJsonResponse(res, 404, info);
		}
	})(req, res);
};
