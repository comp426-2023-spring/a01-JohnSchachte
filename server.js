// Require http module
const http = require('http');
// Require fs module
const fs = require('fs');
// Require minimist module (make sure you install this one via npm).
const minimist = require('minimist');
// Use minimist to process one argument `--port=` on the command line after `node server.js`.
const args = minimist(process.argv.slice(2));
const port = args.port || 3000;

fs.readFile('./public/index.html', 'utf8', (err, data) => {
	if (err) {
		console.error(err);
		return;
	}
	console.log(data);
	const server = http.createServer((req, res) => {
		res.statusCode = 200
		res.setHeader('Content-Type', 'text/html')
		res.end('./public/index.html')
	})
	server.listen(port, () => {
		console.log(`Server listening on port ${port}`)
	})
});