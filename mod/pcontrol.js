const pcontrol = {};

client.on("bot-command", function(command, args){
	const { message } = command;
	const f = pcontrol[command];

	if(f){
		f.apply(this, arguments);
	}
});

pcontrol["pcon-destroy"] = function(){
	client.destroy();
}