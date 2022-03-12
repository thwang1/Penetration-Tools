Java.perform(function() {
	/*var ThreadDef = Java.use('java.lang.Thread');
	var ThreadObj = ThreadDef.$new();
	function stackTrace() {
		var stack = ThreadObj.currentThread().getStackTrace();
		for (var i = 0; i < stack.length; i++) {
			console.log(i + " => " + stack[i].toString());
		}
		console.log("-------------------------------------");
	}
	var StringDec = Java.use('com.lockincomp.liapp.LiappAlert');
	StringDec.onCreate.overload('android.os.Bundle').implementation = function (prop) {
		send("a() - string dec - got called! ");
		stackTrace();
		var ret = this.a(prop);
		send("ret value : " + ret.toString());
		return ret;
	};*/
   console.log("[+] Hooking Rooting Class");
  //rooting class
   var rootClass1 = Java.use("com.dco.xxx.utils.SecurityUtil");
   var rootClass2 = Java.use("com.scottyab.rootbeer.RootBeer");
   var proxyClass = Java.use("com.dco.xxx.utils.DeviceUtil");
   
  //rooting method
   rootClass1.isRooting.implementation = function() {
     console.log("[+] rooting method1 called");
     return false;
   }
   rootClass2.isRooted.implementation = function() {
     console.log("[+] rooting method2 called");
     return false;
   }
   
   proxyClass.isProxy.implementation = function() {
     console.log("[+] proxy method called");
     return false;
   }
  /* var encryptClass = Java.use("com.dco.xxx.utils.PgpUtil");
   encryptClass.encrypt.overload('java.lang.String').implementation = function(pt) {
     console.log("[+] openpgp encrypt method called");
     console.log("[+] Plaintext : " + pt);
     return this.encrypt(pt);
   }   
   var encryptClass2 = Java.use("com.dco.xxx.utils.AESHelper");
   encryptClass2.encrypt.overload('java.lang.String', 'java.lang.String').implementation = function(pt1, pt2) {
     console.log("[+] openpgp encrypt method called");
	 console.log("\n");
     console.log("[+] Plaintext1 : " + pt1);
	 console.log("\n");
	 console.log("[+] Plaintext1 : " + pt2);
     return this.encrypt(pt1, pt2);
   }   */
});
//frida -U -l bypass_xxx.js -f com.dco.xxx --no-pause