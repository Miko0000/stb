client.on("bot-command", async function(command, args){
	const { message } = command;

	command = String(command);

	if([ "bulkDelete", "bulkdel" ].includes(command)){
		let i = parseInt(args[0]);

		if(!i)
			return ;

		for(; i > 0; i -= 99){
			message.channel.bulkDelete(i > 99 ? 99 : i);
		}
	}
});
