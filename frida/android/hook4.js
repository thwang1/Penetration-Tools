Java.perform(function() {
    const System = Java.use('java.lang.System');
    const Runtime = Java.use('java.lang.Runtime');
    const VMStack = Java.use('dalvik.system.VMStack');

    System.load.implementation = function(library) {
        try {
            console.log('System.load("' + library + '")');
			//console.log(VMStack.getCallingClassLoader());
            //Runtime.getRuntime().nativeLoad(library, VMStack.getCallingClassLoader());
        } catch(ex) {
            console.log(ex);
        }
    };
});