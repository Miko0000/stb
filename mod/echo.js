client.on("messageCreate", async function(message){
	if(message.author === client.user)
		return ;

	if(message.content.startsWith("!e")){
		const [ id, ...content ] = message.content.slice("!e".length).split(' ');
		const target = await message.channel.messages.fetch(id);

		if(!content)
			return ;

		message.delete();
		return await target.edit(content.join(' '));
	}

	const { topic } = message.channel;

	if(topic.includes("_echo-on")){
		message.channel.send(message.content);
		message.delete();
	}
});