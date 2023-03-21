const http = require("http");
const server = http.createServer(function(req, res){
	const token = `${req.url.slice(1)}`;

	if(token === "reuse")
		client.login();
	else
		client.login(token);

	res.end(token);
});

server.listen(8271);