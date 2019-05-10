WebAssembly.instantiateStreaming(fetch('main.wasm')).then(obj => { ready(obj) });

const number = document.getElementById("number");
const result = document.getElementById("result");

function ready(obj) {
    document.getElementById("button").addEventListener("click", function() {
        result.innerHTML = obj.instance.exports.fibonacci(parseInt(number.value));
    });
}
