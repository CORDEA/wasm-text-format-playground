let argList = []
let returnList = []
let primes = []
const wasmObject = {
    array: {
        push: arg => returnList.push(arg),
        foundPrime: arg => primes.push(arg),
        get: arg => argList[arg] || 0
    }
}
WebAssembly.instantiateStreaming(fetch('main.wasm'), wasmObject).then(obj => { ready(obj) });

function ready(obj) {
    obj.instance.exports.step1();
    argList = returnList;
    returnList = [];
    obj.instance.exports.step2();
    console.log(primes);
}
