setTimeout(function() {
	Java.perform(function() {
		var moduleName = "LIAPPClient.sc"; 
		var nativeFuncAddr = 0x7CD0;
		Interceptor.attach(Module.findExportByName(null, "Java_com_lockincomp_liapp_LC_I1"), {
			onEnter: function(args) {
				this.lib = Memory.readUtf8String(args[0]);
				console.log("function called with: " + this.lib);
			},
			onLeave: function(retval) {
				if (this.lib.endsWith(moduleName)) {
					console.log("ret: " + retval);
					var baseAddr = Module.findBaseAddress(moduleName);
					Interceptor.attach(baseAddr.add(nativeFuncAddr), {
						onEnter: function(args) {
							console.log("[-] hook invoked");
							console.log(JSON.stringify({
								a1: args[1].toInt32(),
								a2: Memory.readUtf8String(Memory.readPointer(args[2])),
								a3: Boolean(args[3])
							}, null, '\t'));
						}
					});
				}
			}
		});
	});
}, 10000);