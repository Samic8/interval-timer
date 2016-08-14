var http = require('http'),
	express = require('express'),
	fs = require('fs');

const app = express();
const PORT = 8080;

app.get('/', (request, response) => {
	response.setHeader('Content-Type', 'text/html');
	response.send(fs.readFileSync('index.html'));
});

app.get('/index.js', (request, response) => {
	response.setHeader('Content-Type', 'text/javascript');
	response.send(fs.readFileSync('index.js'));
});

app.get('/app.js', (request, response) => {
	response.setHeader('Content-Type', 'text/javascript');
	response.send(fs.readFileSync('app.js'));
});

app.get('/service-worker.js', (request, response) => {
	response.setHeader('Content-Type', 'text/javascript');
	response.send(fs.readFileSync('service-worker.js'));
});

app.get('/quote-1.json', (request, response) => {
	response.setHeader('Content-Type', 'text/json');
	response.send(fs.readFileSync('quote-1.json'));
});

app.get('/quote-2.json', (request, response) => {
	response.setHeader('Content-Type', 'text/json');
	response.send(fs.readFileSync('quote-2.json'));
});

app.get('/style.css', (request, response) => {
	response.setHeader('Content-Type', 'text/css');
	response.send(fs.readFileSync('style.css'));
});

app.listen(PORT, function() {
	console.log('Server is listening on http://localhost/%s', PORT);
});

