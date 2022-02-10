'use strict'

const response = require('cfn-response');
exports.handler = function(event, context) {
	console.log(JSON.stringify(event))
	response.send(event, context, response.SUCCESS, {
		field: 'success'
	});
};
