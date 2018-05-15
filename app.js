const clout = require('clout-js');

clout.on('started', () => {
	['https', 'http'].forEach((key) => {
		let server = clout.server[key];

		if (server) {
			let port = server.address().port;

			clout.logger.info('%s server started on port %s', key, port);
		}
	});
});

clout.start();

module.exports = clout;
