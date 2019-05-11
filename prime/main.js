let argList = []
let result = []
const wasmObject = {
    array: {
        push: function(arg) { result.push(arg) },
        get: function(arg) { argList[arg] || 0 }
    }
}
WebAssembly.instantiateStreaming(fetch('main.wasm'), wasmObject).then(obj => { ready(obj) });

function ready(obj) {
    obj.instance.exports.step1();
    console.log(result);
}
