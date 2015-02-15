var ralph = new Ralph("Alex");

$(function(){
	if (ralph) {	
		ralph.setReady();

		ralph.executeCommand("what, time");
	}
});

function Ralph (voice) {
	this.voice = voice;
	this.whenReadyCallbacks = [];
	this.recognisedCommands = [];
}

Ralph.prototype.whenReady = function(callback) {
	if (this.whenReadyCallbacks.push) {
		this.whenReadyCallbacks.push(callback);
	}
};

Ralph.prototype.setReady = function() {
	for(var i = 0; i < this.whenReadyCallbacks.length; i++) {
		if (jQuery.isFunction(this.whenReadyCallbacks[i])) {
			this.whenReadyCallbacks[i]();
		}
	}
};

Ralph.prototype.addRecognisedCommand = function(command, callback) {
	if (!this.recognisedCommands.hasOwnProperty(command)) {
		this.recognisedCommands[command] = callback;
	} else {
		console.log("Command: '" + command + "' already in use...");
	}
};

Ralph.prototype.executeCommand = function(command) {
	if (this.recognisedCommands.hasOwnProperty(command)) {
		if (jQuery.isFunction(this.recognisedCommands[command])) {
			this.recognisedCommands[command]();
		}
	} else {
		console.log("Command: '" + command + "' not found...");
	}
}