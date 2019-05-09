const memory = new WebAssembly.Memory({initial: 1});
const wasmObject = {env: {memory: memory}};

WebAssembly.instantiateStreaming(fetch('main.wasm'), wasmObject)
    .then(obj => {
        print(obj.instance.exports.helloWorld());
    });

function print(length) {
    const bytes = new Uint8Array(memory.buffer, 0, length);
    const text = new TextDecoder('utf8').decode(bytes);
    document.getElementById("content").innerHTML = text;
}
