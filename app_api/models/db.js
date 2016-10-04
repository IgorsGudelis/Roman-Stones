var mongoose = require('mongoose');
var dbURI = 'mongodb://localhost/RomanStones';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
	console.log('Mongoose connected to ' + dbURI);
});

require('./category');
require('./user');