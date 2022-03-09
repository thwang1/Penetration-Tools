setTimeout(function() {
	Java.perform(function() {
		Interceptor.attach(Module.findExportByName("LIAPPClient.sc", "Java_com_lockincomp_liapp_LC_I1"), {
			onEnter: function(args) {
				console.log("[*] Hook Success");
				return 0;
			},
			onLeave: function(retval) {
				retval.replace(0);
				console.log("Inside onLeave");
			}
		});
	});
}, 5000);
