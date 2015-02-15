var time = new Time();

function Time() {
	ralph.whenReady(function() {
		ralph.addRecognisedCommand("what, time", function() {
			console.log("happy days!");
		});
	});
}