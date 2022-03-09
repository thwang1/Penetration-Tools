Java.perform(function() {
    var TargetClass = Java.use('com.minkmidascore.request.CMinkConnection');
	//var TargetClass1 = Java.use('kr.co.asiana.mam.SplashScreen');
	TargetClass.toEncodingAES128.implementation = function(p1) {
        console.log('[*] hook success!!');
		console.log("p1 : "+p1);
		//console.log("p2 : "+p2);
		var retval = this.toEncodingAES128(p1);
		console.log('retval : '+retval);
		return retval;
    }
});