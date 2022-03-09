Java.perform(function() {
	Interceptor.attach(Module.findExportByName(null, 'fopen'), {
		onEnter: function(args) {
			var str = Memory.readUtf8String(args[0]);
			var str1 = Memory.readUtf8String(args[1]);
			console.log("str : " + str);
			//console.log("str : " + str);
			if(str1.indexOf('HTC_RILssssss') !== -1) {
				// console.warn('[*] Frida Detection Bypass !')
				console.log("str : " + str);
				console.log("str1 : " + str1);
				Memory.writeUtf8String(args[1], 'Koooo');
			}
		},
		onLeave: function(retval) {
		}
	});
});