var dlsym = new NativeFunction(Module.findExportByName(null, 'dlsym'), 'pointer', ['pointer', 'pointer']);
Interceptor.replace(dlsym, new NativeCallback(function(handle, symbol) {
    console.log("dlsym(" + "handle=\"" + Memory.readUtf8String(handle) + "\"" + ", symbol=" + symbol + ")");
    var name = Memory.readUtf8String(handle);
    if (name !== null) {
        console.log("[*] dlsym " + name);
    }
    return dlsym(handle, symbol);
}, 'pointer', ['pointer', 'pointer']));