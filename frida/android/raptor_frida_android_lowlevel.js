setTimeout(function() { // avoid java.lang.ClassNotFoundException

	Java.perform(function() {
		
		// Low-level intercept and backtrace example

		Interceptor.attach(Module.findExportByName("/data/user/0/kr.co.asiana.mam/files/.temp/LIAPPClient.sc", "Java_com_lockincomp_liapp_LC_I1"), {

			onEnter: function(args1,args2) {

				// debug only the intended calls
				//this.flag = false;
				// var filename = Memory.readCString(ptr(args[0]));
				// if (filename.indexOf("XYZ") === -1 && filename.indexOf("ZYX") === -1) // exclusion list
				// if (filename.indexOf("my.interesting.file") !== -1) // inclusion list
				this.flag = true;

				if (this.flag) {
					console.warn("\n*** entered open");

					var a = Memory.readCString(ptr(args[0]));
					var b = Memory.readCString(ptr(args[1]));
					console.log("\ncontext: " + a);
					console.log("\nstr: " + b);

					// print backtrace
					console.log("\nBacktrace:\n" + Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join("\n"));
				}
			},

			onLeave: function(retval) {

				if (this.flag) {
					// print retval
					console.log("\nretval: " + retval);
					console.warn("\n*** exiting open");
				}
			}

		});   

	});   

}, 0);