'use strict'

const response = require('cfn-response');
exports.handler = function(event, context) {
	console.log('hello')
	response.send(event, context, response.SUCCESS, {
		field: 'success'
	});
};
