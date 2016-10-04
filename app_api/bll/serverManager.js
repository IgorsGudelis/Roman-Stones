var fs = require('fs');

var ServerManager = function () {};

ServerManager.prototype.sendJsonResponse = function(res, status, content) {
	res.status(status);
	res.json(content);
};

module.exports = ServerManager;