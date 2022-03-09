Java.perform(function() {
	Java.choose(com.lockincomp.liapp.LC, {
		"onMatch" : function(instance) {
			console.log(instance.toString())
		},
		"onComplete":function() {
			console.log(instance.toString())			
		}
	})
});