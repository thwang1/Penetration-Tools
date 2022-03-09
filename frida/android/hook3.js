Java.perform(function() {
    var TargetClass = Java.use('com.lockincomp.liapp.LC');
	//var TargetClass1 = Java.use('kr.co.asiana.mam.SplashScreen');
	console.log("Before : " + TargetClass.LTM.value);
	TargetClass.LTM.value = 'qwe';
	console.log("After : " + TargetClass.LTM.value);
});