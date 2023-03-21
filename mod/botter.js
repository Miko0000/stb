client.on("messageCreate", function(message){
	if(message.author === client.user)
		return ;

	if(!message.content.startsWith("!")){
		return ;
	}

	const [ command, ...args ] = message.content.slice(1)
		.split(' ');

	client.emit("bot-command", {
		message,
		toString(){ return command }
	}, args);
});