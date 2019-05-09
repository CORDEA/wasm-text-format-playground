const memory = new WebAssembly.Memory({initial: 1});
const wasmObject = {env: {memory: memory}};

WebAssembly.instantiateStreaming(fetch('main.wasm'), wasmObject)
    .then(obj => {
        log(obj.instance.exports.helloWorld());
    });

function log(length) {
    const bytes = new Uint8Array(memory.buffer, 0, length);
    const text = new TextDecoder('utf8').decode(bytes);
    console.log(text);
}
